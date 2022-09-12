const express = require('express');
const app=express();


const bodyParser= require('body-parser');
app.use(bodyParser.json());

//connecting to database..
require('./database.js');


app.use('/users',require('./src/controller/user-controller'));

app.use('/diseases',require('./src/controller/disease-controller'));

app.use('/doctordetails',require('./src/controller/doctor-controller'));

app.use('/medicalDetails',require('./src/controller/medDetails-controller'));


app.listen(3000,() => {
    console.log(`listening on port 3000,server started..`);
  })