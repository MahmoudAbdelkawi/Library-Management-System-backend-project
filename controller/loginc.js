/* GET home page. */
const userSchema = require('../model/login')
exports.show = function(req, res, next) {
    res.render('login',{display : "d-none"});
};
exports.getUserData = function(req, res, next) {
    const user = new userSchema({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        date: req.body.date,
        email: req.body.email,
        password: req.body.password
    }).save()
    res.render("login" , {display : "d-none"})
};
exports.checkUserSigning = function(req, res, next) {
    userSchema.find({email:req.body.email,password:req.body.password},(err,data)=>{
        if (data.length > 0) {
            if (req.body.email === 'mhmdfrj107@gmail.com') {
                exports.admin = 1
            }else{
                exports.admin = 0
            }   
            userSchema.find({},(err,data)=>{
                exports.usersNum=data.length
            })
            res.redirect('/mainPage')
        }
        else
        {
            res.render("login" , {display : "d-block"})
        }
    }).catch(()=>{

    })
    
};

