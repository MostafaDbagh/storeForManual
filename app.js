const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const db =require('./db/connect')

const app = express();

const productApi = require('./api/routes/product')
const locationApi = require('./api/routes/locations')
const contactSupportApi = require('./api/routes/contact')
const orderApi = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(cors())

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/products',productApi);
app.use('/orders',orderApi);
app.use("/location",locationApi)
app.use("/",contactSupportApi)

app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use((req,res,next)=>{

  const errorObj = {
    message:'not Found',
    status:404
  }
    next(errorObj);
})
app.use((error,req,res,next)=>{
    res.status(error.status ||500).json({
        error:{
            message:error.message
        }
    })
})


module.exports=app
