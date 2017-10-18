import express from 'express'
import * as Products from '../controllers/ProductsController'
const router = express.Router()

router.route('/')
      .get(Products.getAllProducts)
      .post(Products.createOneProduct)
router.route('/:pid')
      .get(Products.getOneProduct)
      .delete(Products.getOneAndRemoveProduct)
      .put(Products.getOneAndUpdateProduct)


export default router
