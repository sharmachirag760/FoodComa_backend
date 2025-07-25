const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
     productName : {
        type : String,
        required : [true,"product name is required"],
        trim : true,
        minlength : [3,"product should be atleast 3 character"]
     },
     type : {
      type : String,
      required : [true,"product type is required"],
      trim : true
     },
     sku : {
      type : String,
      trim : true
     },
     productImageUrl : {
      type : String,
      required : true
   },
     description :{
        type : String,
        minlength : [5,"product should be atleast 5 character"]
     },
     
     quantity:{
         type : Number,
         required : true,
         default : 10
     },
     price :{
        type : Number,
        required : [ true,"Product price is required"]
     }
},{
timestamps : true
}
)
const Product = mongoose.model("Product",productSchema);
module.exports ={
    Product
}