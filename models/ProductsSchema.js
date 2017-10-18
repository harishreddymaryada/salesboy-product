import mongoose from 'mongoose'
// import Genre from './GenreSchema'
//
var ProductsSchema = mongoose.Schema({
  // genreId:{type:mongoose.Schema.Types.ObjectId,ref:'Genre'},
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
