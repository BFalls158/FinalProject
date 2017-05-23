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
    var username = req.params.username;
    pool.query("SELECT" + username + "FROM userinfo;").then(function(result) {
        res.send(result.rows);
    });
});

app.get('/db/userinfo/:username', function(req, res) {
	//retrives list of users. Used in logging in/creating account
    pool.query("SELECT username FROM userinfo;").then(function(result) {
        res.send(result.rows);
    });
});
    
app.get('/db/library/:username', function(req, res) {
	//retrieve library of user.
    var username = req.params.username;
    pool.query("SELECT * FROM library WHERE username=" + username + ";").then(function(result) {
        res.send(result.rows);
    }); 
});

app.get('/db/watchlist/:username', function(req, res) {
	//retrieve watchlist of user
    var username = req.params.username;
     pool.query("SELECT * FROM watchlist WHERE username=" + username + "';").then(function(result) {
        res.send(result.rows);
     });     
});

app.get('/db/library', function(req, res) {
	//retrieve libraries of all users
    pool.query("SELECT * FROM library;").then(function(result) {
        res.send(result.rows);
    });
});

app.get('/db/watchlist', function(req, res) {
	//retrieve watchlists of all users
    pool.query("SELECT * FROM watchlist;").then(function(result) {
        res.send(result.rows);
    });    
});
    
app.get('/db/userinfo', function(req, res) {
	//get email by user
    var username = req.params.username;
    pool.query("SELECT email FROM userinfo WHERE username=" + username + ";").then(function(result) {
        res.send(result.rows);
    });    
});    

app.delete('/api/library/', function(req, res) {
    //delete from library
    pool.query("DELETE FROM library WHERE " + type + "=" + type + ";").then(function(result) {
        res.send(result.rows);
    });
});

app.post('/email', function(req, res) {
	//send email to user about book request
	var body = req.body;
	var user1 = {
		name: body.userName1,
		email: body.userEmail1,
		title: body.title1
	}
	var user2 = {
		name: body.userName2,
		email: body.userEmail2,
		title: body.title2
	}
	sendEmail(user1, user2);
	console.log('Success');
});

app.delete('/api/watchlist/', function(req, res) {
    //delete from watchlist
    pool.query("DELETE FROM watchlist WHERE " + type + "=" + type + ";").then(function(result) {
        res.send(result.rows);
    });
});

/**
* This call sends an email to one recipient, using a validated sender address
* Do not forget to update the sender address used in the sample
*/

var mailjet = require ('node-mailjet')
    .connect('184f5bf7776ad290ae318526722d4b4e'
, '882b52189118835a928e463c7ed0926c');

function handleError (err) {
  throw new Error(err.ErrorMessage);
}

// function newContact (email) {
//   mailjet.post('contact')
//       .request({Email: email})
//       .catch(handleError);
// }

function sendEmail (user1, user2) {
  email = {};
  email['FromName'] = 'Book Buddies';
  email['FromEmail'] = 'Book.Buddies.Exchange.App@gmail.com	';
  email['Subject'] = user1.name + ' has requested a trade!';
  email['Recipients'] = [{Email: user2.email}];
  email['Text-Part'] = 'Hello, ' + user2.name + '. ' + user1.name + ' has proposed a trade with you. They would like to exchange'
  + user1.title + ' for your book called ' + user2.title + '. Please contact this user at ' + user1.email + ' if you wish to trade.';

  mailjet.post('send')
    .request(email)
    .catch(handleError);
}


// testEmail('Hi Emily');

// Server port listen stuff
var port = process.env.PORT || 3030;
app.listen(port, function() {
	console.log('Server is running on ' + port);
});
