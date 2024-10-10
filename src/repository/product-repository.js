const { Product } = require("../models/index.js");

class ProductRepository {
  async create(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      console.log("Something went wrong in Repository layer", error);
      throw error;
    }
  }
  async get(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("'Product not found.'");
      }
      return product;
    } catch (error) {
      console.log("Something went wrong in Repository layer", error);
      throw error;
    }
  }

  async update(data, id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("'Product not found.'");
      }

      await product.update(data);
      return product;
    } catch (error) {
      console.log("Something went wrong in Repository layer", error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("'Product not found.'");
      }
      await product.destroy();
      return true;
    } catch (error) {
      console.log("Something went wrong in Repository layer", error);
      throw error;
    }
  }
}

module.exports = ProductRepository;
