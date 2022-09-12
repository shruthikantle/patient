const mongoose= require('../../database.js');

const DSchema = mongoose.Schema;

let diseaseSchema = new DSchema({

    name:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('diseases',diseaseSchema);
