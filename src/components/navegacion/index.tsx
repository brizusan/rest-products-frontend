import { NavLink } from "react-router-dom"

export const Navegacion = () => {
  return (
    <nav className="my-8 max-w-6xl mx-auto w-5/6 lg:w-full flex gap-4 justify-end ">
      <NavLink
        className="font-semibold uppercase  text-gray-600 hover:text-gray-800"
        to="/">Productos</NavLink>
      <NavLink 
        className="font-semibold uppercase  text-gray-600 hover:text-gray-800"
        to="/product/new">Agregar Producto</NavLink>
    </nav>
  )
}
