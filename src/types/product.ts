import z from "zod";

export type DataRequest = {
  [k: string]: FormDataEntryValue;
}

export const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  stock: z.number()
})

export const productSchemaResponse = productSchema.extend({
  availability: z.boolean(),
  id: z.number()
})

export const productsSchemaResponse = z.array(productSchemaResponse)

export type Product = z.infer<typeof productSchema> 
export type ProductResponse = z.infer<typeof productSchemaResponse>
export type ProductsResponse = z.infer<typeof productsSchemaResponse>



