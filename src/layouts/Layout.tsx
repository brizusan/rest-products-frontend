import { Outlet, useLocation } from "react-router-dom";
import { Navegacion } from "../components";
import { useMemo } from "react";

export const Layout = () => {
  const location = useLocation();

  const isEdit = useMemo(() => location.pathname.includes("edit"), [location]);

  return (
    <>
      <header className=" py-12 bg-blue-400">
        <h1 className="text-center text-3xl lg:text-4xl font-semibold tracking-wider text-white">
          REST PRODUCTS | REACT TS
        </h1>
        <p className="text-center text-cyan-50 mt-2 antialiased font-light ">
          FullStack | Typescript | Express | PostgreeSQL | React
        </p>
      </header>
      {!isEdit && <Navegacion />}

      <main className=" min-h-auto my-12 max-w-6xl mx-auto w-5/6 lg:w-full p-6">
        <Outlet />
      </main>
    </>
  );
};
