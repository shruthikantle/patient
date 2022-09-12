const { Schema } = require('../../database.js');
const mongoose= require('../../database.js');

const MSchema = mongoose.Schema;

let medDetailsSchema = new MSchema({

    patientId:{
        type:Schema.Types.ObjectId,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    disease:{
        type: Schema.Types.ObjectId,
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    
    admissionDetail:{
        admittingWard:[{
            admittedIn:{
                type:String,
                enum:['ICU','GENERAL','SPECIAL'],
                default:'GENERAL'
            },
            perDayFee:{type:Number,default:0},
            noOfDays:{type:Number,default:0}
        }

        ],
        dateOfAdmission:{
            type:Date,
            default:Date.now
        }
    },
    labTestDetail :[{
        testType:{
            type:String,
            enum:['ECG','CT','X-RAY'],
            default:''

        },
        testStatus:{
            type:String,
            enum:['NORMAL','MILD','WORSE'],
            default:''
        }
        
    }],
    medicine:[{
        type:String,
        default:''
    }],
    totalBills:{
        regFees:{
            type:Number,
            default:200
        },
        admissionFees:{
            type:Number,
            default:0
        },
        labTestBill:{
            type:Number,
            default:0
        }

    },
    createdAt:{
        type:Date,
        default:Date.now
    }



})

module.exports = mongoose.model('medical_details',medDetailsSchema);
