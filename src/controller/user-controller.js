const express = require('express');

const userService = require('../service/user-service');
const route = express.Router();

route.post('/createData',(req,res) =>{
    console.log('payload from postman in controller',req.body);

    userService.createData(req.body).then((result) =>{
        res.send(result);

    }).catch((error) =>{
        console.log('error',error);
        console.log('inside the controller');
        res.send(error);
    })
})

route.post('/login',(req,res) => {
    console.log('payload from postman in controller',req.body);

    userService.login(req.body).then((result) => {
        res.send(result);

    }).catch((error) => {
        res.send(error);

    })
})

route.put('/userApproval/:_id',(req,res) =>{

    console.log('payload from postman in controller',req.params);

    userService.userApproval(req.params).then((result) => {
        res.send(result);

    }).catch((error) =>{
        res.send(error);
    })
})




module.exports = route;