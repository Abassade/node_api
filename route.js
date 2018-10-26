var express = require('express');
var client = require('./connection');
var bodyParser = require('body-parser');
var route = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var Promise = require('bluebird');

route.get('/item', (req, res)=>{

    
});

route.get('/item:id', (req, res)=>{

   // res.send('Yeah got it');
   getFromIndex();
   closeConnection();

});

route.post('/item', urlencodedParser, (req, res)=>{

   addToIndex();
   closeConnection();
   // res.send('Yeah saved :'+req.body.name);
});

function addToIndex() {

    return client.index({
  
      index: 'stuffs',
  
      type: 'office',
  
      id: '1',
  
      body: {
  
        name: 'Battery'
  
      }
  
    }).then(function(data){
        console.log(data);
    });
  
  }

  function getFromIndex() {

    return client.get({
  
      id: 1,
  
      index: 'stuffs',
  
      type: 'office',
  
    }).then(function(data){
        console.log(data);
        
    });
  
  
  
  }
  function closeConnection() {

    client.close();
  
  }

  Promise.resolve()

  .then(addToIndex)

  .then(getFromIndex)

  .then(closeConnection);

module.exports=route;