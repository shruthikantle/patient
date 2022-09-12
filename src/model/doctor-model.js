const { Schema } = require('../../database.js');
const mongoose= require('../../database.js');

const DocSchema = mongoose.Schema;

let doctorSchema = new DocSchema({

    name:{
        type:String,
        required:true
    },
    id:{
        type:Schema.Types.ObjectId,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },
    specialization :{
        type:String,
        required:true
    },
    
    disease:[{
        type:Schema.Types.ObjectId,
        required:true
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }



})

module.exports = mongoose.model('doctorDetails',doctorSchema);
