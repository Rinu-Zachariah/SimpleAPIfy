/*eslint-env node, express*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var mongoose = require('mongoose');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

var db_string = 'mongodb://localhost/trialAPI';
var db = mongoose.connect(db_string, function(err) {
	if (err) {
		console.error('Could not connect to MongoDB!');
		console.log(err);
	}
});
console.log(db);
var bodyParser = require('body-parser');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


require('./app/models/Main.server.model');
require('./app/routes/Main.server.routes').r(app);


//Third Party API Call
// var request = require('request');

// var options = {
//   rejectUnauthorized: false,
//   method: "GET",
//   url: 'https://api.myhumm.com/v2/songs/popular',
//   qs: {
//     'auth': '57863dc8ae8c50532e822024'
//   }
// };

// var callback = function (error, response, body) {
 	
//   if (!error && response.statusCode === 200) {
//   	console.log(response.body);
//   }
// };
 
// request(options, callback);





// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
