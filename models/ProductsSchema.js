import mongoose from 'mongoose'
import Salesman from './SalesmanSchema'

var ProductsSchema = mongoose.Schema({
  SalesmanId:{type:mongoose.Schema.Types.ObjectId,ref:'Salesman'},
  productName:{type:String,
             required:true
          },
  createdAt :{
    type:Date,
    required:true,
    default:Date.now
  }
})

export default mongoose.model('Products',ProductsSchema)
