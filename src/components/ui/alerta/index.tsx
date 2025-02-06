import React from "react";

type props = {
  children: React.ReactNode;
  type: string;
};

export const Alerta = ({ children, type }: props) => {
  return (
    <div
      className={`
      ${
        type === "success" ? "text-green-500" : "text-red-500"
      } 0 text-sm font-bold italic text-center py-2
    `}
    >
      {children}
    </div>
  );
};
