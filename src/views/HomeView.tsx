import { useMemo } from "react";
import {  ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { getProducts, updateAvaliable } from "../services/product-service";
import { ProductsResponse } from "../types/product";
import ProductDetail from "../components/products/ProductDetail";

export async function loader() {
  const products = await getProducts();
  if (!products) return null;
  return products;
}

export async function action({request}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  const {id} = data
  if(!id) return null
  await updateAvaliable(+id)
  return {}
}

export default function HomeView() {
  const products = useLoaderData() as ProductsResponse;
  const isEmptyProducts = useMemo(() => products.length === 0, [products]);

 
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-semibold text-slate-700">
        {isEmptyProducts ? "Lista Vacia" : "Listado de Productos"}
      </h2>
      {isEmptyProducts && (
        <p className="text-lg font-semibold text-slate-500">
          No tenemos productos registrados por el momento
        </p>
      )}

      {!isEmptyProducts && (
        <section className="bg-white">
          <table className="w-full mt-5 table-auto border rounded-sm shadow overflow-hidden">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Producto</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Disponibilidad</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductDetail 
                  key={product.id}
                  product={product}
                />
                
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}
