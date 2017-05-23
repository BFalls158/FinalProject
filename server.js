var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//var pool = new pg.Pool({
//	//Get Marcells stuff
//});

// var pool = require("./pg-connection-pool");

app.get('/db/users', function(req, res) {
	//retrives list of all users
});

app.get('/db/users/:user', function(req, res) {
	//retrives list of users. Used in logging in/creating account
});

app.get('/db/library/:user', function(req, res) {
	//retrieve library of user.
});

app.get('/db/watchlist/:user', function(req, res) {
	//retrieve watchlist of user
});

app.get('/db/library', function(req, res) {
	//retrieve libraries of all users
});

app.get('/db/watchlist', function(req, res) {
	//retrieve watchlists of all users
});











var port = process.env.PORT || 3030;
app.listen(port, function() {
	console.log('Server is running on ' + port);
});
