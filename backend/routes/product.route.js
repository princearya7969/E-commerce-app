const express = require("express")
const router = express.Router();

const { productData} = require("../controller/product.controller");


router.post("./", productData);

module.exports = router;