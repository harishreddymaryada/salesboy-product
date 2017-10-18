import express from 'express'

import * as Salesman from '../controllers/SalesmanController'

const router = express.Router()

router.route('/')
      .get(Salesman.getAllSalesmanList)
      .post(Salesman.createOneSalesman)
router.route('/:sid')
      .get(Salesman.getOneSalesman)
      .delete(Salesman.getOneSalesmanAndRemove)
      .put(Salesman.getOneSalesmanAndUpdate)
router.route('/:sid/products/:pid')
      .get(Salesman.getSalesmanSingleProduct)



export default router
