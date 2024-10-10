const { ProductRepository } = require("../repository/index.js");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(data) {
    try {
      const product = await this.productRepository.create(data);
      return product;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const product = await this.productRepository.get(id);
      return product;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw error;
    }
  }

  async update(data, id) {
    try {
      const product = await this.productRepository.update(data, id);
      return product;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.productRepository.destroy(id);
      return response;
    } catch (error) {
      console.log("Somthing went wrong in service layer");
      throw error;
    }
  }
}

module.exports = ProductService;
