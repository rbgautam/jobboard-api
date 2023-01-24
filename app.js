const express = require('express');
const PORT = 8080;
const app = express();

app.get('/',(req,res)=>{
    // res.status(200);
    // res.writeHead(200,{'content-type':'application/json'});
    res.status(200).setHeader(name='content-type',value='application/json').json({data:'Welcome to our Job Board'});
});


app.listen(PORT,()=>{
    console.log('Job Board api started');
});