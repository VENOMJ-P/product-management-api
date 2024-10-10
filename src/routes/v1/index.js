const express = require("express");

const productController = require("../../controllers/product-controller.js");
const { validateProduct } = require("../../middlewares/validate-product.js");

const router = express.Router();

router.post("/", validateProduct, productController.create);
router.get("/:id", productController.get);
router.put("/:id", validateProduct, productController.update);
router.delete("/:id", productController.destroy);

module.exports = router;
