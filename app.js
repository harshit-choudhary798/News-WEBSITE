const express = require('express')
const app=express()
const port = process.env.PORT||3000;
//const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes/news'))

app.listen(port,()=> console.log("started"))