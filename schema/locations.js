const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
    {
        location_id:{type:Number,required:true},
        customer_location_name:{type:String,required:true},
        customer_location_phone:{type:String,required:true},
        customer_location_area:{type:String,required:true},
        customer_location_building:{type:String,required:true},
        customer_location_floorNumber:{type:String,required:true},
        customer_location_apartmentNumber:{type:String,required:true},
        customer_location_order:{type:Array,required:true},
    }
)

module.exports=mongoose.model('locations',LocationSchema)