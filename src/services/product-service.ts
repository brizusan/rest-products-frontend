import { AxiosError } from "axios";
import ProductApi from "../api";
import {
  ProductResponse,
  productSchema,
  productSchemaResponse,
  productsSchemaResponse,
  type DataRequest,
} from "../types/product";

export const registerProduct = async (dataForm: DataRequest) => {
  try {
    const result = productSchema.safeParse({
      name: dataForm.name,
      price: +dataForm.price,
      stock: +dataForm.stock,
    });

    if (result.success) {
      const {
        data: { data },
      } = await ProductApi.createProduct(result.data);
      return data;
    } else {
      console.log(result.error);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.msg);
    }
  }
};

export const getProducts = async () => {
  try {
    const {
      data: { products },
    } = await ProductApi.getProducts();
    const result = productsSchemaResponse.safeParse(products);
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.error.message);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};

export const getProductById = async (id: ProductResponse["id"]) => {
  try {
    const {
      data: { product },
    } = await ProductApi.getProductById(id);
    const result = productSchemaResponse.safeParse(product);
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result?.error.message);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};

export const updateProduct = async (
  id: ProductResponse["id"],
  dataForm: DataRequest
) => {
  try {
    const resultado = productSchema.safeParse({
      name: dataForm.name,
      price: +dataForm.price,
      stock: +dataForm.stock,
    });

    if (resultado.success) {
      const {
        data: { msg },
      } = await ProductApi.updateProduct(id, resultado.data);
      return msg;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.msg);
    }
  }
};

export const deleteProduct = async (id: ProductResponse["id"]) => {
  try {
    const {
      data: { msg },
    } = await ProductApi.deleteProduct(id);
    alert(msg);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.msg);
    }
  }
};

export const updateAvaliable = async(id:ProductResponse["id"])=>{
  const {data : {msg}} = await ProductApi.updateAvailability(id)
  return msg
} 
