var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//var pool = new pg.Pool({
//	//Get Marcells stuff
//});

// var pool = require("./pg-connection-pool");

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



/**
* This call sends an email to one recipient, using a validated sender address
* Do not forget to update the sender address used in the sample
*/

var mailjet = require ('node-mailjet')
    .connect('184f5bf7776ad290ae318526722d4b4e'
, '882b52189118835a928e463c7ed0926c')

function handleError (err) {
  throw new Error(err.ErrorMessage);
}

// function newContact (email) {
//   mailjet.post('contact')
//       .request({Email: email})
//       .catch(handleError);
// }

function sendEmail (text) {
  email = {};
  email['FromName'] = 'Book Buddies';
  email['FromEmail'] = 'Book.Buddies.Exchange.App@gmail.com	';
  email['Subject'] = 'Test Email';
  email['Recipients'] = [{Email: 'emilyrn@bgsu.edu'}];
  email['Text-Part'] = text;

  mailjet.post('send')
    .request(email)
    .catch(handleError);
}

    
// testEmail('Hi Emily');

// Server port listen stuff
>>>>>>> 18814487a4cb09313a8a6136b62cbf24565d1aaa
var port = process.env.PORT || 3030;
app.listen(port, function() {
	console.log('Server is running on ' + port);
});