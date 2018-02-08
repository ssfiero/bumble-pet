const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);


router
.use(function(req, res, next) {
  console.log('In the login route:', req.body);
  next();
})
.post('/', function(req, res, next) {
  console.log('Received login info:', req.body);
  knex('users')
    .where('username', req.body.username)
    .then(function(usersData) {
      user = usersData[0];
      console.log('Found user in database', user);

      // error if password entered does not match password in database
      if(!bcrypt.compareSync(req.body.password, user.password)) throw 400;
      console.log('Password is valid');

      req.session.username = user.username;
      req.session.userid = user.id;

      res.redirect('/find');
    })
    .catch(function(err) {
      console.log(err);
      if (err) {
        res.redirect('/');
      }
      res.sendStatus(500);
    });

})







module.exports = router;
