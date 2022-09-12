const medDetailsDAO = require('../DAO/medDetails-dao');

const medDetailsService={
    
    createData:(dataFromController) =>{

        console.log('inside the service page',dataFromController);

        return new Promise((resolve,reject) =>{

            medDetailsDAO.createData(dataFromController).then((result) =>{
                resolve(result);
            }).catch((error) =>{

                console.log('error',error);
                reject(error);
            })
        })

    },

    labTest:(conditionFromController) => {

        return new Promise((resolve,reject) => {

            medDetailsDAO.labTest().then((result) =>{
                resolve(result);
            }).catch((error) =>{
                reject(error);
            })
        })
    },

    labReport:(conditionFromController) => {

        return new Promise((resolve,reject) => {

            medDetailsDAO.labReport().then((result) =>{
                resolve(result);
            }).catch((error) =>{
                reject(error);
            })
        })
    },

    medicines:(conditionFromController) => {

        return new Promise((resolve,reject) => {

            medDetailsDAO.medicines().then((result) =>{
                resolve(result);
            }).catch((error) =>{
                reject(error);
            })
        })
    }
}

module.exports = medDetailsService;