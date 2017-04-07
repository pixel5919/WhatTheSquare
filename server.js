{//variables
var _	= require('lodash');
var victor = require('victor');
var app  = require("express")();
var http = require('http').Server(app);
var io	 = require('socket.io')(http);

app.set('port', 3000);
app.get('/', function(req, res){ res.sendFile(__dirname + '/index.html') });
app.get('/style.css', function(req, res){ res.sendFile(__dirname + 
					'/style.css') });
app.get('/bin/socket-io.js', function(req, res){ res.sendFile(__dirname + 
					'/bin/socket-io.js    ') });
app.get('/bin/keys.js', function(req, res){ res.sendFile(__dirname + 
					'/bin/keys.js') });
http.listen(app.get('port'), function(){ console.log('listening on ' + 
					app.get('port') + '    ...') });

}


