const express = require('express');

const diseaseService = require('../service/disease-service');
const route = express.Router();

route.post('/createData',(req,res) =>{
    console.log('payload from postman in controller',req.body);

    diseaseService.createData(req.body).then((result) =>{
        res.send(result);

    }).catch((error) =>{
        console.log('error',error);
        console.log('inside the controller');
        res.send(error);
    })
})

route.get('/getDiseaseList',(req,res) =>{
    
    diseaseService.getDiseaseList().then((result) =>{
        res.send(result);
    }).catch((error) =>{
        console.log(error);

        res.send(error);
    })
})

module.exports = route;