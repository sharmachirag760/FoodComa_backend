const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
     productName : {
        type : String,
        required : [true,"product name is required"],
        trim : true,
        minlength : [5,"product should be atleast 5 character"]
     },
     description :{
        type : String,
        minlength : [5,"product should be atleast 5 character"]
     },
     productImage : {
        type : String
     },
     price :{
        type : Number,
        required : [ true,"Product price is required"]
     },
     category :{
        type : String,
        enum : ["veg","non-veg", "drinks","sides"],
        default : "veg"
     },
     inStock : {
        type : Boolean,
        required : [true,"instock status is required"],
        default : true
     }
},{
timestamps : true
}
)
const Product = mongoose.model("Product",productSchema);
module.exports ={
    Product
}