const express = require('express');
const router = express.Router();
const fromProduct = require('../controllers/products');

router.get('',fromProduct.getAllProducts); 

router.post('', fromProduct.addProduct);

router.put('/:id', fromProduct.updateProduct);

router.delete('/:id', fromProduct.deleteProduct);
module.exports = router;