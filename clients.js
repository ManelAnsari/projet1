var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'agence'
//   ,port:3306
});
 


router.get('/', function(req, res, next) {
    connection.connect();
 
    connection.query('SELECT * from  client', function (error, results, fields) {
      if (error) throw error;
      console.log(results)
      res.render('clients', { list: results} );
    
    });
     
    connection.end();
 
 
    
});

module.exports = router;
