const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    // res.status(200);
    // res.writeHead(200,{'content-type':'application/json'});
    res.status(200).setHeader(name='content-type',value='application/json').json({data:'Welcome to our Job Board'});
});


app.listen(PORT,()=>{
    console.log(`Job Board api started on port ${PORT} in ${process.env.NODE_ENV}`);
})