const { postLocation } = require('../../controllers/locationController');
const routes = require('express').Router();




routes.post("/sendLocation",postLocation )


module.exports=routes



