const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);
//Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema

export const User = mongoose.model('User',userSchema);

module.exports=User;