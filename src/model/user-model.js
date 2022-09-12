const mongoose= require('../../database.js');

const USchema = mongoose.Schema;

let userSchema = new USchema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum : ['ADMIN','DOCTOR','PATIENT'],
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status :{
        type:String,
        enum:['APPROVED','REJECTED','PENDING'],
        default:'PENDING'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }



})

module.exports = mongoose.model('users',userSchema);
