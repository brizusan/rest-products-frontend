import apiAxios from "../lib/axios";
import type {  Product, ProductResponse } from "../types/product";
export default {

  createProduct(data: Product) {
    return apiAxios.post("/products/register", data);
  },
  getProducts() {
    return apiAxios.get("/products");
  },
  getProductById(id: ProductResponse["id"]) {
    return apiAxios.get(`/products/${id}`);
  },
  updateProduct(id: ProductResponse["id"], data : Product) {
    return apiAxios.put(`/products/${id}`, data); 
  },
  updateAvailability(id:ProductResponse["id"]){
    return apiAxios.patch(`/products/${id}`)
  },
  deleteProduct(id:ProductResponse["id"]) {
    return apiAxios.delete(`/products/${id}`);
  },

};
