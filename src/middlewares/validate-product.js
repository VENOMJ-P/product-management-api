const { StatusCodes } = require("http-status-codes");

const validateProduct = (req, res, next) => {
  if (!req.body.name || !req.body.price || !req.body.category) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      data: {},
      succes: false,
      message: "Invalid request for create a product",
      err: "Missing Mandatory field to create a product",
    });
  }
  next();
};

module.exports = {
    validateProduct,
};
