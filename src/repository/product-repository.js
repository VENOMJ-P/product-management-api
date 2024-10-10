const { StatusCodes } = require("http-status-codes");

const { Product } = require("../models/index.js");
const {
  ClientError,
  AppError,
  ValidationError,
} = require("../utils/errors/index.js");

class ProductRepository {
  async create(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      this.handleDatabaseError(error, "creating the product");
    }
  }
  async get(id) {
    try {
      const product = await this.findProductById(id);

      return product;
    } catch (error) {
      this.handleDatabaseError(error, "fetching the product");
    }
  }

  async update(data, id) {
    try {
      console.log(id);

      const product = await this.findProductById(id);

      await product.update(data);
      return product;
    } catch (error) {
      this.handleDatabaseError(error, "updating the product");
    }
  }

  async destroy(id) {
    try {
      const product = await this.findProductById(id);

      await product.destroy();
      return true;
    } catch (error) {
      this.handleDatabaseError(error, "deleting the product");
    }
  }

  handleDatabaseError(error, operation) {
    console.error(`Database error while ${operation}:`, error);

    if (error instanceof ClientError) throw error;

    if (error.name === "SequelizeValidationError") {
      throw new ValidationError(error);
    }

    throw new AppError(
      "DatabaseError",
      `An unexpected error occurred while ${operation}`,
      error.message,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  async findProductById(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new ClientError(
        "ProductNotFound",
        "Product not found",
        `Product with ID ${id} does not exist`,
        StatusCodes.NOT_FOUND
      );
    }
    return product;
  }
}

module.exports = ProductRepository;
