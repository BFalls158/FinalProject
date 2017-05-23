var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//var pool = new pg.Pool({
//	//Get Marcells stuff
//});

var pool = require("./pg-connection-pool");

app.get('/db/userinfo', function(req, res) {
	//retrives list of all users
    pool.query("SELECT" + username + "FROM userinfo;").then(function(result) {
        res.send(result.rows);
    });
});

app.get('/db/userinfo/:username', function(req, res) {
	//retrives list of users. Used in logging in/creating account
    pool.query("SELECT username FROM userinfo;").then(function(result) {
        res.send(result.rows);
});

app.get('/db/library/:username', function(req, res) {
	//retrieve library of user.
    pool.query("SELECT * FROM library WHERE username='" + username + "';").then(function(result) {
        res.send(result.rows);
    
});

app.get('/db/watchlist/:username', function(req, res) {
	//retrieve watchlist of user
     pool.query("SELECT * FROM watchlist WHERE username='" + username + ';").then(function(result) {
        res.send(result.rows);
});

app.get('/db/library', function(req, res) {
	//retrieve libraries of all users
    pool.query("SELECT * FROM library;").then(function(result) {
        res.send(result.rows);
});

app.get('/db/watchlist', function(req, res) {
	//retrieve watchlists of all users
    pool.query("SELECT * FROM watchlist;").then(function(result) {
        res.send(result.rows);
});












var port = process.env.PORT || 3030;
app.listen(port, function() {
	console.log('Server is running on ' + port);
});