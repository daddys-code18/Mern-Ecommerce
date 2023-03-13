const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const express = require("express");
// const { authenticate } = require("./../middleware/authenticate");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/products/:id").put(updateProduct).get(getProductDetails);
// .delete(deleteProduct);

module.exports = router;
