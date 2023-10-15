const LocationSchema = require('../schema/locations')

const path = require('path')



const postLocation = async (req,res) =>{

        const body = req.body;
        
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'No message was sent',
            })
        }
    
        const location = new LocationSchema({...body})
    
        if (!location) {
            return res.status(400).json({ success: false, error: err })
        }
    
       await location
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: location._id,
                })
            })
    }
    



module.exports={
    postLocation
}