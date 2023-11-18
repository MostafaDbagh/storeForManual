const orderSchema = require('../schema/order')









const getOrders = async (req, res) => {
await orderSchema.find({}).then(data => {
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

const makeOrder =  async(req,res) =>{

        const body = req.body;
        
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'No message was sent',
            })
        }
    
        const order = new orderSchema(body)
    
        if (!order) {
            return res.status(400).json({ success: false, error: err })
        }
    
       await order
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: order._id,
                })
            })
    }



    const FilterOrder= async (req, res) => {
        const {searchQuery} = req.params;
        try {
            const searchResult = await orderSchema.find({product_name:  new RegExp(searchQuery, 'i') })
            res.json({ results: searchResult,message:'data fetched successfully',count:searchResult.length });
          } catch (err) {
            res.status(500).json({ error: err.message ,message:'error fetch'});
          } 
    }



module.exports = {
    getOrders,
    makeOrder,
 
}