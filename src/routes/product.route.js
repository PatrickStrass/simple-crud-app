import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

export default async function (app) {
  app.get("/api/products", getProducts);
  app.get("/api/product/:id", getProduct);
  app.post("/api/product", createProduct);
  app.put("/api/product/:id", updateProduct);
  app.delete("/api/product/:id", deleteProduct);
}
