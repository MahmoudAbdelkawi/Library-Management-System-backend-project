const add = require('../model/user-books')
const product = require('../model/product')
exports.add = (req,res)=>{
  let book = new add({
    title: req.body.title,
    auther : req.body.auther,
    image : req.body.image,
    description : req.body.description
  }).save().then(()=>{
      res.redirect("/getCart")
  })
  
}


exports.getcart = (req,res)=>{
  add.find({},(err,book)=>{
    res.render('book-user',{books:book})
  })
}


exports.deletefromcart = (req,res)=>{
  let id = req.body.id
  add.deleteOne({_id : id},(err,book)=>{
    res.redirect("/getCart")
  })
}