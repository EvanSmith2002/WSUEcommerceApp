const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    productID:{
        type:String,
        required:true
    },
    priceID:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}

);
//Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema

const Product = mongoose.model('products',productSchema);

module.exports=Product;