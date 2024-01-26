const mongoose = require('mongoose');
const {Schema} = mongoose;
  

const toDoSchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    tel:{type:String},
    price: {type: String},
    devise:{type:String,required:true},
    createdBy:{
        ref:"User",
        type:Schema.ObjectId
    }
},{
    timestamps:true
});

const ToDo = mongoose.model("ToDo",toDoSchema);

module.exports = ToDo;