const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);



router
.get('/signup', function(req, res) {
  res.render('signup.ejs');
})
.post('/signup', function(req, res, next) {
  console.log('In the signup route. Request body is:', req.body);
  knex('users')
    .where('username', req.body.username)
    .then(function(usersData) {

      return knex('users')
      .insert({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt)
      })
      .returning('id')
    })
    .then(function(userId) {
      console.log('Request username is:', req.body.username);

      req.session.username = req.body.username;
      req.session.userid = userId[0];
      console.log('This is the session object:', req.session);
      console.log('User id:', userId);

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
