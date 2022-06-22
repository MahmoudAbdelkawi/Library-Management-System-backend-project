
const product = require('../model/product')
const admin =  require("./loginc")
exports.show = (req,res,next)=>{
    product.find({},(err,data)=>{
        let display = "d-none"
        //admin.admin
        if (admin.admin) {
            display = "d-block"
        }
        res.render('MainPage',{books:data,display : display,usersNumber :admin.usersNum})
    })
    
}

