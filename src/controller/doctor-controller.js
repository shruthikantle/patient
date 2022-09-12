const express = require('express');

const doctorService = require('../service/doctor-service');
const route = express.Router();

route.post('/createData',(req,res) =>{
    console.log('payload from postman in controller',req.body);

    doctorService.createData(req.body).then((result) =>{
        res.send(result);

    }).catch((error) =>{
        console.log('error',error);
        console.log('inside the controller');
        res.send(error);
    })
})

module.exports = route;