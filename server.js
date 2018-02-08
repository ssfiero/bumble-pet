const config = require('./knexfile.js')['development'];
  // console.log('Envir: ', process.env.ENVIRONMENT);
const knex = require('knex')(config);
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const session = require('express-session');
const bcrypt = require('bcryptjs');



// middleware
let morgan = require('morgan');
let bodyParser = require('body-parser');


app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));


// access static resources (images/css) in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


// access the templating view files in the 'view folder'
app.set('views', './views');
// use the templating engine ejs
app.set('view engine', 'ejs');


let signinRoute = require('./routes/signinRoute.js');
let signupRoute = require('./routes/signupRoute.js');
let findRoute = require('./routes/findRoute.js');
let matchRoute = require('./routes/matchRoute.js');
// let favsRoute = require('./routes/favsRoute.js');
let signoutRoute = require('./routes/signoutRoute.js');


// render home page
app.get('/', function(req, res) {
  res.render('home.ejs');
});


// default password = user's name
app.use(session({
  secret: 'asScD53mo9eHo7meXk',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));


app.use(function(req, res, next) {
  console.log('Session is: ', req.session);
  next();
});


app.use(signinRoute);
app.use(signupRoute);
app.use(findRoute);
app.use(matchRoute);


app.use(function(req, res, next) {
  if(!req.session.username) {
    console.log('redirecting');
    res.redirect('/')
  } else {
    console.log('not redirecting');
    next();
  }
});


// app.use(favsRoute);
app.use(signoutRoute);


app.use(function(req, res) {
  res.sendStatus(404);
});


let server = app.listen(port, function() {
  console.log('Listening on port', port);
});




module.exports = app;
