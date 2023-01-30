const routes = require('express').Router();
const upload = require('../storage/storage');
const productController = require('../../controllers/productControllers')
  


routes.post('/add',upload.single('product_image'), productController.addProduct)
routes.get('/',productController.getProducts)
routes.get('/:id',productController.getProductById)
routes.delete('/:id',productController.deleteProduct);
routes.put('/:id',productController.updateProduct)




module.exports =routes;