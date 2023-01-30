const productSchema = require('../schema/productSchema')
const path = require('path')



const addProduct = async (req, res) => {
    const body = req.body;
    const filePath = req.file.path;
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No message was sent',
        })
    }

    const product = new productSchema({...body,product_image:filePath})

    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }

   await product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
            })
        })
}

const getProducts = async (req, res) => {
await productSchema.find({}).then(data => {
        res.status(200).json({
            data,
            message: 'data fetch successfully'
        })
    }).catch(err => {
        res.status(404).json({
            err,
            message: 'data not found'
        })
    });

}
const getProductById = async (req, res) => {
    const { id } = req.params;
    await productSchema.findOne({ _id: id }).then(data => {
        res.status(200).json({
            data,
            message: 'productId fetch successfully'
        })
    }).catch(err => {
        res.status(404).json({
            err,
            message: 'data not found'
        });

    })
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    productSchema.findByIdAndDelete(id,  (err, data)=> {
        if (err || !data) {
            res.status(404).json({
                err,
                message: 'we can not find this productId'
            })
        }
        else {
            res.status(200).json({
                data,
                message: 'productId deleted successfully'
            })
        }
    });

}

const updateProduct = async (req, res) => {
    const body = req.body
    const {id} = req.params;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
   await productSchema.findOne({ _id: id })
   .then(product =>{
          product.product_name = body.product_name ;
        product.product_price = body.product_price;
        product.product_type= body.product_type;
               product
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: product._id,
                    message: 'product updated!',
                })
            })
   })
   .catch(err=>{
                return res.status(404).json({
                    error:err,
                    message: 'user not updated!',
                })
            })
   
   
     
}

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct
}