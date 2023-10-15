const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        product_id:{type:Number,required:true},
        product_admin:{type:String,required:true},
       product_name:{type:String,required:true},
       product_type:{type:String ,required:true},
       product_price:{type:String,required:true},
    product_image:{type:String,required:true}
     
    }
)

module.exports=mongoose.model('products',UserSchema)