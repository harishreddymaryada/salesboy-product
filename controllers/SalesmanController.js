import Salesman from '../models/SalesmanSchema'
import Products from '../models/ProductsSchema'


export const getAllSalesmanList = (req,res,next) => {
    Salesman.find().sort({'_id': -1}).exec((err,results) => {
      if(err){
        res.json({'message':'err'}).status(500)
        next(err)
      }
      res.json({results}).status(200)
      next()
    })
}


export const createOneSalesman = (req,res,next) => {
        var employee = req.body.salesmanId
        Salesman.findOne({salesmanId:{$regex: new RegExp(employee)}}).exec((err,result) =>{
          if(err){
            res.json({'success':false,'message':'Err'})
            next(err)
          }
          else if(result){
            res.json({'success':false,'message':'already exists'})
            next()
          }
          else{
            const newSalesman = new Salesman(req.body)
            newSalesman.save((err,result) =>{
              if(err){
                res.json({'success':false,'message':'Err During Saving'})
                next(err)
              }

                res.json({'success':true,result})
                  next()
            })
          }
        })

}

export const getOneSalesman = (req,res,next) => {
  var id = req.params.sid
   Salesman.findById(id).then(function(result){
         res.json({result})
         next()
   })
}

export const getOneSalesmanAndRemove = (req,res,next) =>{
  var id = req.params.sid
  Salesman.findById(id).exec((err,result) =>{
    if(err){
      res.json({'success':false})
      next(err)
    }
    result.remove()
    res.json({'success':true})
    next()
  })

}
export const getOneSalesmanAndUpdate = (req,res,next) =>{
  var id = req.params.sid
  Salesman.findByIdAndUpdate(id,{$set:req.body}).exec((err,result) =>{
    if(err){
      res.json({'success':false})
      next(err)
    }
    res.json({'success':true})
    next()
  })

}


// export const getSalesmanProducts = (req,res,next) =>{
//   var id = req.params.sid
//   Salesman.findById(id).exec((err,result) =>{
//         if(err){
//           res.json({'success':false})
//           next(err)
//         }
//         Salesman.find({products:id}).exec((err,results) =>{
//           if(err){
//             res.json({'success':false})
//             next(err)
//           }
//           res.json({results})
//         })
//
//   })
// }
