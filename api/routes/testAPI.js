var express = require("express");
var mysql = require('mysql');
var router = express.Router();

var pool = mysql.createPool({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '!sodwkdrh1234',
	database : 'bueno'
  })

router.get("/", function(req, res, next){
	//res.send("API is working properly");
	pool.getConnection((err, connection)=>{
		if(err) throw err;
		else{
		  connection.query("select * from user", (err, rows) => {
			if(err) throw err;
			else
			{
			  console.log(rows);
			  res.send(rows);
			}
		  })
		  connection.release();
		}
	  })
});

module.exports = router;
