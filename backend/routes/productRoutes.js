import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import Product from '../models/productModel.js'

//Route for fetching all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//Route for fetching single product with a particular id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product Not found')
    }
  })
)

export default router
