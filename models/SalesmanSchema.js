import mongoose from 'mongoose'
import Product from './ProductsSchema'

var SalesmanSchema = mongoose.Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  email:{
    type:String
  },
  salesmanId:{
    type:String
  },
  products:{
    type:mongoose.Schema.Types.ObjectId,ref:'Product'
  },
  createdAt:{
    type:Date,
    default:Date.now,
    required:true
  }
})

export default mongoose.model('Salesman',SalesmanSchema)
