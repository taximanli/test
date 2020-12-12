const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.get('/:productID', (req, res, next) => {
    const ID = req.params.productID;
    if (ID === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            ID: ID
        });
    }
    else
    {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.patch('/:productID', (req, res, next) => {
        res.status(200).json({
            message: 'Updated product!'
        });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});


module.exports = router;