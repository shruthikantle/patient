const doctorDAO = require('../DAO/doctor-dao');

const doctorService={
    
    createData:(dataFromController) =>{

        console.log('inside the service page',dataFromController);

        return new Promise((resolve,reject) =>{

            doctorDAO.createData(dataFromController).then((result) =>{
                resolve(result);
            }).catch((error) =>{

                console.log('error',error);
                reject(error);
            })
        })

    }
}

module.exports = doctorService;