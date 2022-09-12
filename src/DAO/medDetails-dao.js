const medDetailsModel = require('../model/medDetails-model');

const medDetailsDAO={

    createData:(dataFromService) =>{

        console.log('inside the DAO page',dataFromService);

       
        return new medDetailsModel({
            patientId:dataFromService.patientId,
            name:dataFromService.name,
            age:dataFromService.age,
            gender:dataFromService.gender,
            dateOfBirth:dataFromService.dateOfBirth,
            bloodGroup:dataFromService.bloodGroup,
            disease:dataFromService.disease,
            doctor:dataFromService.doctor,
            specialization:dataFromService.specialization,
            admissionDetail:dataFromService.admissionDetail,
            labTestDetail:dataFromService.labTestDetail,
            medicine:dataFromService.medicine,
            totalBills:dataFromService.totalBills,


        }).save();
    },

    labTest:(conditionFromService) => {
        let condition = conditionFromService|| {};

      console.log('create payload inside DAO',conditionFromService);
      return medDetails.updateOne(condition._id,req.body);

        

    },

    labReport:(conditionFromService) => {
        let condition = conditionFromService|| {};

      console.log('create payload inside DAO',conditionFromService);
      return medDetails.updateOne(condition);

        

    },

    medicines:(conditionFromService) => {
        let condition = conditionFromService|| {};

      console.log('create payload inside DAO',conditionFromService);
      return medDetails.updateOne(condition._id,req.body);

        

    }
}



module.exports = medDetailsDAO;