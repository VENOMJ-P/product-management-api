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
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to create product.",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const product = await productService.get(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: product,
      success: true,
      message: "Successfully fetch product.",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to fetch product.",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const product = await productService.update(
      { name, price, description, category },
      req.params.id
    );
    return res.status(StatusCodes.OK).json({
      data: product,
      success: true,
      message: "Successfully updated the product.",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to update product.",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await productService.destroy(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully delete the product.",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to delete product.",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
