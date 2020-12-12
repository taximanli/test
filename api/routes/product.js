const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const Id = req.params.productId;
    if (Id === 'special') {
        res.status(200).json({
            message: 'You discovered the special Id',
            Id: Id
        });
    }
    else
    {
        res.status(200).json({
            message: 'You passed an Id'
        });
    }
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

router.patch('/:productId', (req, res, next) => {
        res.status(200).json({
            message: 'Updated product!'
        });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;