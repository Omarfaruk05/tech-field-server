const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");


router.route('/addProduct')
.post(productController.addProduct)

module.exports = router