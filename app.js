const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const productRoute = require('./api/routes/product');
const orderRoute = require('./api/routes/order');

/*
mongoose.connect('mongodb+srv://admin:'+process.env.MONGO_ATLAS_PASSWORD+'@cluster0.8zhzm.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useMongoClient: true
});
*/

mongoose.connect('mongodb+srv://admin:hjrrmgwg@cluster0.8zhzm.mongodb.net/<dbname>?retryWrites=true&w=majority');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/product', productRoute);
app.use('/order', orderRoute);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;