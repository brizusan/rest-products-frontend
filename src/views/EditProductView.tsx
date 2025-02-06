import { useMemo } from "react";
import {
  Form,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { Alerta } from "../components";
import { getProductById, updateProduct } from "../services/product-service";
import type { ProductResponse } from "../types/product";

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (!id) return redirect("/");
  const product = await getProductById(+id);
  return product;
}

export async function action({ request, params }: LoaderFunctionArgs) {
  let error = "";
  const { id } = params;
  if (!id) return redirect("/");
  const data = Object.fromEntries(await request.formData());

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
    return error;
  }
  const res = await updateProduct(+id, data);
  return res;
}

export default function EditProductView() {
  const product = useLoaderData() as ProductResponse;
  const action = useActionData() as string;
  const navigate = useNavigate();

  const isSuccess = useMemo(() => action == "Producto actualizado", [action]);

  if (isSuccess) {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <section className="space-y-8">
      <div className="flex justify-end">
        <button
          className="bg-blue-400 p-2 px-6 rounded-md text-white hover:bg-blue-500 hover:cursor-pointer transition-all"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
      </div>

      <Form
        method="post"
        className="space-y-2 max-w-3xl bg-white mx-auto border px-6 py-12 rounded border-slate-200"
      >
        <div className="max-w-2xl mx-auto">
          <legend className="text-3xl text-slate-500 uppercase font-bold pb-4">
            Editar Producto
          </legend>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="name">
              Nombre Producto:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              name="name"
              defaultValue={product.name || ""}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="price">
              Precio:
            </label>
            <input
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio Producto. ej. 200, 300"
              name="price"
              defaultValue={product.price || ""}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="stock">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Stock del Producto. ej. 10, 30"
              name="stock"
              defaultValue={product.stock || ""}
            />
          </div>
          {action && (
            <Alerta type={isSuccess ? "success" : "error"}>
              <small>{isSuccess ? "Producto actualizado" : action}</small>
            </Alerta>
          )}

          <input
            type="submit"
            className="mt-5  bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer transition-colors p-2 w-2/3 mx-auto block text-white font-semibold text-lg cursor-pointer rounded"
            value="Actualizar Producto"
          />
        </div>
      </Form>
    </section>
  );
}
