import { Product } from "../models/product.model.js";

const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).send(products);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const getProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findById(id);
    response.status(200).send(product);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const createProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).send(product);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const updateProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByIdAndUpdate(id, request.body);

    if (!product) {
      return response.status(404).send({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    response.status(200).send(updatedProduct);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return response.status(404).send({ message: "Product not found" });
    }
    response.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
