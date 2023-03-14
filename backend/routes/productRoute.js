const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router
  .route("/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllProducts);
router.route("/products/new").post(isAuthenticatedUser, createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser, updateProduct)
  .get(getProductDetails);
// .delete(deleteProduct);

module.exports = router;
