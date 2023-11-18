const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
       order_id:{type:Number,required:true},
       order_details:{type:Array,required:true},
       order_date:{type:String ,required:true},
       order_totalAmount:{type:Number,required:true},
       order_status:{type:String,required:true},
       order_isCompleted:{type:Boolean,required:true}
     
    }
)

module.exports=mongoose.model('orders',OrderSchema)