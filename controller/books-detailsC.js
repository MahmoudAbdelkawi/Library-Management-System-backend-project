exports.show = function(req, res, next) {
    res.render('book-details');
};

const product = require('../model/product')
exports.show = (req,res,next)=>{
   
    product.find({},(err,data)=>{
        res.render('book-details',{books:data})
    })
    
}