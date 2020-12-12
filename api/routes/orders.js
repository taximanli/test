const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200) .json({
       message: 'Orders were fetched'
   });
});

router.get('/:OrderId', (req, res, next) => {
    res.status(201) .json({
        message: 'Order details',
        Id: req.params.OrderId
    });
 });

router.post('/', (req, res, next) => {
    res.status(201) .json({
        message: 'Orders was created'
    });
 });

router.delete('/:OrderId', (req, res, next) => {
    res.status(201) .json({
        message: 'Order deleted'
    });
 });

 
module.exports = router;