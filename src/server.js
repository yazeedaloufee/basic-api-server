'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRoutes= require('./routes/food.js')

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


//routes
app.use('/api/v1/food',foodRoutes)
app.use('*',notFoundHandler);
app.use(errorHandler);




function start (port){

    app.listen(port,()=>{

        console.log(`port is up and running on ${port}`)
    })
};


module.exports={
    server:app,
    start:start,
};