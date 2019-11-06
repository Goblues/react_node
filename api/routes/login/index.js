var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: "!sodwkdrh1234",
    database: 'bueno'
})

router.get('/', (req, res, next) => {
    //res.render('index', { title: 'Login' });
    res.render('login.jade');
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/login', 
    failureFlash: true}
    ));

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) =>{
    if(username === 'user001' && password === 'password'){
        console.log("user confirmed");
        return done(null, {
            'user_id' : username,
        });
    }else{
        return done(false, null);
    }
}))

passport.serializeUser((user, done) => {
    console.log("serialized user");
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})
module.exports = router;