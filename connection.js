var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts:'http://localhost:9200/'
});



  client.indices.exists({index: 'stuffs'}, (err, res, status) => {

      if (res) {

          console.log('index already exists');

      } else {

          client.indices.create( {index: 'stuffs'}, (err, res, status) => {


          console.log(err, res, status);

      })

    }

  })



module.exports = client;