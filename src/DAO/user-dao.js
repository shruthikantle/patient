const userModel = require('../model/user-model');

const userDAO={

    createData:(dataFromService) =>{

        console.log('inside the DAO page',dataFromService);

       
        return new userModel({
            name:dataFromService.name,
            age:dataFromService.age,
            gender:dataFromService.gender,
            role:dataFromService.role,
            phone:dataFromService.phone,
            email:dataFromService.email,
            password:dataFromService.password,
            address:dataFromService.address,
            status:dataFromService.status

        }).save();
    },

    login : (payload) =>{

        console.log('inside the dao page');

        return userModel.findOne({email:payload.email,password:payload.password});


    },

    userApproval: (conditionFromService) =>{
        let condition = conditionFromService|| {};
  
        console.log('create payload inside DAO',conditionFromService);
        return userModel.updateOne(condition,{$set:{status:"APPROVED"}});
      }
    
}



module.exports = userDAO;