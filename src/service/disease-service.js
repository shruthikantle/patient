const diseaseDAO = require('../DAO/disease-dao');

const diseaseService={
    
    createData:(dataFromController) =>{

        console.log('inside the service page',dataFromController);

        return new Promise((resolve,reject) =>{

            diseaseDAO.createData(dataFromController).then((result) =>{
                resolve(result);
            }).catch((error) =>{

                console.log('error',error);
                reject(error);
            })
        })

    },

    getDiseaseList: () =>{
        return new Promise((resolve,reject) =>{
            diseaseDAO.getDiseaseList().then((result) =>{
            resolve(result);
                
            }).catch((error) =>{
                reject(error);
            })
        })
    }
}

module.exports = diseaseService;