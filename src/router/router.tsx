import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import HomeView ,{loader as HomeLoader , action as ActionUpdateAvaliable}from "../views/HomeView";
import NewProduct, {
  action as ActionNewProduct,
} from "../views/NewProductView";
import EditProduct , {loader as EditLoader , action as EditAction} from "../views/EditProductView";
import {action as ActionDeleteProduct} from "../components/products/ProductDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: HomeLoader,
        action : ActionUpdateAvaliable
      },
      {
        path: "/product/new",
        element: <NewProduct />,
        action: ActionNewProduct,
      },
      {
        path: "/product/edit/:id",
        element: <EditProduct />,
        loader: EditLoader,
        action: EditAction
      },
      {
        path:"/product/delete/:id",
        action: ActionDeleteProduct
      }
    ],
  },
]);
