var express = require("express");
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

var pool = mysql.createPool({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '!sodwkdrh1234',
	database : 'bueno'
  })


router.get("/", (req, res, next) => {
	res.send("API is working properly");
});

module.exports = router;
