
/* GET home page. */
const productSchema = require('../model/product')
exports.add_product = function (req, res, next) {
    res.render('addbook');
};

exports.add_book = (req, res) => {
    let book = new productSchema({
        title: req.body.bookName,
        subject: req.body.subject,
        image: req.body.image,
        categories: req.body.select,
        auther: req.body.auther,
        publisher: req.body.publisher,
        copies: req.body.copies,
        price: req.body.price,
        description: req.body.description
    }).save().then(() => {
        res.redirect("/mainPage")
    })

}

exports.deletebook = (req, res) => {
    let id = req.body.id
    productSchema.deleteOne({ _id: id }, (err, book) => {
        res.redirect("/delete-book")
    })
}


exports.deletepage = function (req, res, next) {
    productSchema.find({},(err, book) => {
        res.render('deletebook', {books : book});
    })
};