import Product from '../models/productModel.js';
import AsyncHandler from 'express-async-handler';

// @desc Fetch all products
// @route GET /api/products
// @access public

const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single products
// @route GET /api/products/:id
// @access public

const getProductById = AsyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error(`Product not found`);
  }
});

export { getProductById, getProducts };
