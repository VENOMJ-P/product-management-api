const { StatusCodes } = require("http-status-codes");

const { ProductService } = require("../services/index");

const productService = new ProductService();

const create = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const product = await productService.create({
      name,
      price,
      description,
      category,
    });
    return res.status(StatusCodes.CREATED).json({
      data: product,
      success: true,
      message: "Successfully created product.",
      err: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        data: {},
        message: error.message || "Failed to create product.",
        err: error.explanation || error,
      });
  }
};

const get = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.get(id);
    return res.status(StatusCodes.OK).json({
      data: product,
      success: true,
      message: "Successfully fetch product.",
      err: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        data: {},
        message: error.message || "Failed to fetch product.",
        err: error.explanation || error,
      });
  }
};

const update = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const { id } = req.params;

    const product = await productService.update(
      { name, price, description, category },
      id
    );
    return res.status(StatusCodes.OK).json({
      data: product,
      success: true,
      message: "Successfully updated the product.",
      err: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        data: {},
        message: error.message || "Failed to update product.",
        err: error.explanation || error,
      });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productService.destroy(id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully delete the product.",
      err: {},
    });
  } catch (error) {
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        data: {},
        message: error.message || "Failed to delete product.",
        err: error.explanation || error,
      });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
