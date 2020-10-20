import express from 'express';
const router = express.Router();

import Product from '../models/productModel.js';
import AsyncHandler from 'express-async-handler';

// @desc Fetch all products
// @route GET /api/products
// @access public

router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch single products
// @route GET /api/products/:id
// @access public

router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);

    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error(`Product not found`);
    }
  })
);

export default router;
