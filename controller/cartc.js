const product = require('../model/product')
exports.show = function(req, res, next) {
    let id = req.params.id
    product.find({_id:id},(err,data)=>{
        res.render('cart',{books:data})
    })
};



