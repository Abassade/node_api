const express = require('express');
const app = express();
const port = 3000;
const client=require('./connection')

const route = require('./route');
app.use('/api',route);

app.listen(process.env.PORT || port,
     ()=>{console.log('listening on '+port)});