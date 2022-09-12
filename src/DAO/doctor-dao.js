const doctorModel = require('../model/doctor-model');

const doctorDAO={

    createData:(dataFromService) =>{

        console.log('inside the DAO page',dataFromService);

       
        return new doctorModel({
            name:dataFromService.name,
            id:dataFromService.id,
            phone:dataFromService.phone,
            disease:dataFromService.disease,
            specialization:dataFromService.specialization

        }).save();
    }
}
module.exports = doctorDAO;