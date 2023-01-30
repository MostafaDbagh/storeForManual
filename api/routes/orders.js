const routes = require('express').Router();

routes.get('/',(req,res)=>{
    res.status(200).json({
        message:'we are handling the get order request'
    })
})

routes.post('/',(req,res)=>{
    const orderObj= {
        name:req.body.name,
        quantity:req.body.quantity
    }
    res.status(200).json({
        message:'we are handling the post order request',
        order:orderObj
    })
})
routes.get('/:orderId',(req,res)=>{
    res.status(200).json({
        message:'we are handling order Details'
    })
})
routes.delete('/:orderId',(req,res)=>{
    res.status(200).json({
        message:'we are handling order Details deleted'
    })
})
module.exports = routes