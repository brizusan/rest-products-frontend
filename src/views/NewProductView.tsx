import { useMemo } from "react";
import { ActionFunctionArgs, Form, useActionData, useNavigate } from "react-router-dom";
import { Alerta } from "../components";
import { registerProduct } from "../services/product-service";

export async function action({ request }: ActionFunctionArgs) {
  let errors = "";
  const data = Object.fromEntries(await request.formData());
  if (Object.values(data).includes("")) {
    errors = "Todos los campos son obligatorios";
    return errors;
  } else {
    errors = "";
    await registerProduct(data);
    return "realizando registro";
  }
}

export default function NewProductView() {
  const action = useActionData() as string;
  const navigate = useNavigate();

  const isSuccess = useMemo(() => action == "realizando registro", [action]);
  
  if(isSuccess){
    setTimeout(() => {
      navigate("/")
    },1500)
  }


  return (
    <Form
      method="post"
      className="space-y-2 max-w-3xl bg-white mx-auto border px-6 py-12 rounded border-slate-200"
    >
      <div className="max-w-2xl mx-auto">
        <legend className="text-3xl text-slate-500 uppercase font-bold pb-4">
          Registrar Producto
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
          />
        </div>

        {action && (
          <Alerta
            type={isSuccess ? "success" : "error"}
          >
            <small >{isSuccess ? "Producto Registrado" : action}</small>
          </Alerta>
        )}
        <input
          type="submit"
          className="mt-5  bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer transition-colors p-2 w-2/3 mx-auto block text-white font-semibold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </div>
    </Form>
  );
}
