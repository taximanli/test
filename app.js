const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoute = require('./api/routes/product');
const orderRoute = require('./api/routes/order');

app.use('/product', productRoute);
app.use('/order', orderRoute);

module.exports = app;