const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

const PORT = process.env.PORT;

const jobs =require('./routes/jobs');

app.use('/api/v1',jobs);

app.listen(PORT,()=>{
    console.log(`Job Board api started on port ${PORT} in ${process.env.NODE_ENV}`);
})