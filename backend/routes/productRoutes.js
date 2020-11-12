import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

router.route('/', getProducts);

router.route('/:id', getProductById);

export default router;
