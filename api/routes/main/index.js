var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: "!sodwkdrh1234",
    database: 'bueno'
})

router.get('/', (req, res, next) => {
    var id = req.user.user_id;
    res.render('index', { title: 'Main' , username: id});
})

module.exports = router;