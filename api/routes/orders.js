const routes = require('express').Router();
const orderController = require("../../controllers/orderController");

routes.get('/',orderController.getOrders)
routes.post('/makeOrder',orderController.makeOrder)

module.exports = routes