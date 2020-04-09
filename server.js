//server.js
// BASE SETUP
// =============================================================================
var mongoose    = require('mongoose');
// mongoose.Promise = global.Promise;
// TODO: Start a MongoDB client and connect to it here
mongoose.connect('mongodb://localhost/DatBin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});      

// call the packages we need
var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');    // allows us to process html requests

// configure app to use bodyParser()
// this will let us get the data from a POST into JSON format easily
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configure to use PUG, our templating engine
//set location of view folder
app.set('views', './views');
//set pug as templating engine
app.set('view engine', 'pug');



var port = process.env.PORT || 8080;        // set our port

// REGISTER OUR ROUTES -------------------------------
app.use('/paste', require('./routes/pastes'));
app.use('/', require('./routes/default'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server Listening On ' + port);
