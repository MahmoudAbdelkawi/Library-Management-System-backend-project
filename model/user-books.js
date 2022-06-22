const mongoose = require("mongoose");

const yourbooksSchema = mongoose.Schema({
  title: {type:String,require:true},
  auther: {type:String,require:true},
  image: {type:String,require:true},
  description: {type:String,require:true}
});

module.exports = mongoose.model("yourbooks", yourbooksSchema)