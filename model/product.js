const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    title: {type:String,require:true},
    subject: {type:String,require:true},
    auther: {type:String,require:true},
    publisher: {type:String,require:true},
    image: {type:String,require:true},
    price: {type:Number,require:true},
    copies: {type:Number,require:true},
    description: {type:String,require:true},
    categories: {type:String,require:true}
});




module.exports = mongoose.model("products", productSchema)
