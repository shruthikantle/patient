const userDAO = require('../DAO/user-dao');

const userService={
    
    createData:(dataFromController) =>{

        console.log('inside the service page',dataFromController);

        return new Promise((resolve,reject) =>{

            userDAO.createData(dataFromController).then((result) =>{
                resolve(result);
            }).catch((error) =>{

                console.log('error',error);
                reject(error);
            })
        })

    },
login :(payload)=>
{ 
    return new Promise((resolve,reject)=>
    { 
        userDAO.login(payload).then((result) =>{ 
            if(!result)
            reject({message:"email/password not matched"});
            if(result.role !="ADMIN" && result.status!="APPROVED")
            reject({message:"your profile is inactive,contact admin",status:result.status})
            resolve({message:"logged in successfully",data:{email:result.email,phone:result.phone}}); 
         }).catch((error)=> { 
                reject(error) ;
        }) 
    })
 },

 userApproval: (conditionFromController) =>{
    console.log('condition in service from controller', conditionFromController);
    return new Promise((resolve,reject) =>{

        userDAO.userApproval(conditionFromController).then((result) =>{
            resolve(result);
        }).catch((error) =>{
            reject(error);
        })
    })
}

}


module.exports = userService;