const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var addbook = require('./routes/addbook');
const mainPage = require('./routes/mainPage')
const login = require('./routes/login')
const contact = require('./routes/contact')
const cart = require('./routes/cart')
const booksDetails = require('./routes/books-details')
const addtocart = require('./routes/book-user')

var app = express();

mongoose.connect('mongodb://localhost:27017/products', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('connected failed');
  })


// view engine setup
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addbook);
app.use(mainPage);
app.use(login);
app.use(contact);
app.use(cart);
app.use(booksDetails);
app.use(addtocart);

app.listen(80);