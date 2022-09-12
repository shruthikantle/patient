const express = require('express');

const medDetailsService = require('../service/medDetails-service');
const route = express.Router();

route.post('/createData',(req,res) =>{
    console.log('payload from postman in controller',req.body);

    medDetailsService.createData(req.body).then((result) =>{
        res.send(result);

    }).catch((error) =>{
        console.log('error',error);
        console.log('inside the controller');
        res.send(error);
    })
})

route.put('/labTest/:_id',(req,res) => {
    console.log('payload from postmam in controller',req.params);

    medDetailsService.labTest(req.params,req.body).then((result) => {
        res.send(result);

    }).catch((error) => {
        console.log('error',error);
        res.send(error);
    })
})

route.put('/labReport/:_id',(req,res) => {
    console.log('payload from postmam in controller',req.params);

    medDetailsService.labReport(req.params).then((result) => {
        res.send(result);

    }).catch((error) => {
        console.log('error',error);
        res.send(error);
    })
})

route.put('/medicines/:_id',(req,res) => {
    console.log('payload from postmam in controller',req.params);

    medDetailsService.medicines(req.params).then((result) => {
        res.send(result);

    }).catch((error) => {
        console.log('error',error);
        res.send(error);
    })
})
module.exports = route;