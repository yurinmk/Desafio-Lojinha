const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const ProductController = require("../controller/ProductController");

router.get("/findAllProducts", ProductController.findAllProducts);
router.get("/findAllProductsType/:type", ProductController.findAllProductsType);
router.post("/createProduct", ProductController.createProduct);
router.put(
  "/saveProductImage/:id",
  multer(multerConfig).single("file"),
  ProductController.saveProductImage
);

module.exports = router;
