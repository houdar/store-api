const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:[true , 'please provide a product name ']
    },
    price:{
        type:Number , 
        required:[true , 'please provide a product price ']
    },
    featured:{
        type:Boolean ,
        default: false  

    },
    rating : {
        type : Number , 
        default:4.5, 
    },
    createdAt : {
        type: Date , 
        default: Date.now()
    } , 
    company:{
        type : String,
        enum:{
            values: ['ikea', 'marcos','liddy','caressa'], 
            message : '{VALUE} is not supported'
        }
    }

})

module.exports = mongoose.model('Product',productSchema )