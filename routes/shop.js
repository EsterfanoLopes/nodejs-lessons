const path = require('path');

const express = require('express');

const productsContoller = require('../controllers/products');

const router = express.Router();

router.get('/', productsContoller.getProducts);

module.exports = router;
