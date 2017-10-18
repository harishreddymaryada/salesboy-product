import Products from '../models/ProductsSchema'

export const getAllProducts = (req,res) => {
  //  .populate({path:'genreId',model:'Book'})
    Products.find().sort({'_id': -1}).exec((err,results) => {
      if(!err){
        res.json({results}).status(200)
      }
      else{
        res.json({'message':'err'}).status(500)
      }
    })
}
// create new book
export const createOneProduct = (req,res) => {
        var productName = req.body.productName
        Products.findOne({productName:{$regex: new RegExp(productName)}}).populate().exec((err,result) =>{
          if(err){
            res.json({'success':false,'message':'Err'})
          }
          else if(result){
            res.json({'success':false,'message':'already exists'})
          }
          else{
            const newProducts = new Products(req.body)
            newProducts.save((err,result) =>{
              if(err){
                res.json({'success':false,'message':'Err During Saving'})
              }
              else{
                res.json({'success':true,result})
              }
            })
          }
        })
}
// // display selected
export const getOneProduct = (req,res,next) => {
  var id = req.params.pid
  Products.findById(id).exec((err,result)=>{
    cb(res,next,err,result)
  })
}
function cb(res,next,err,result){
  if(err){
    res.json({'success':false})
    next(err)
  }
    res.json({result})
    next()
}
// // deleted selected
export const getOneAndRemoveProduct = (req,res,next) => {
  var id = req.params.pid
  Products.findById(id).exec((err,result) =>{
    if(err){
      res.json({'Success':false,})
      next(err)
    }
    result.remove()
    res.json({'success':true})
    next()
  })
}
// // update all fields
export const getOneAndUpdateProduct = (req,res,next) => {
  var id = req.params.pid
  Products.findByIdAndUpdate(id,{$set:req.body}).exec((err,result)=>{
    if(err){
      res.json({'success':false,'message':'Error'})
      next(err)
    }
    res.json({'success':true})
    next()
  })
}
