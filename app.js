let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = process.env.PORT || 9000;
let mongoose = require('mongoose');
let morgan = require('morgan');
let options = {
	server: {
		socketOptions: {
			keepAlive: 300000
		}
	}
};

let mongodbUri = 'mongodb://localhost/hotelapp';
mongoose.connect(mongodbUri, options);
let conn = mongoose.connection;

conn.on('disconnected', function() {
	setTimeout(function(){
		mongoose.connect(mongodbUri);
	}, 3000);
});

conn.on('error', function(error) {
	console.error('Error in MongoDb connection: ' + error);
	mongoose.disconnect();
});

conn.on('connected', function(){
	console.log('connected with mongodb');
});


app.use(bodyParser.json());
app.use(morgan('dev'));
require("./server/routes.js")(app);
app.listen(port);
console.log('App is listening on port: ' + port);
console.log('http://localhost:' + port);
