const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();


router
  .use(function(req, res, next) {
    console.log('In the logout route. Logged in user is: ', req.session.username);
    next();
  })
  .get('/signout', function(req, res, next) {
    delete req.session.username;
    delete req.session.userid;
    console.log('In the logout route. Verify user and userid have been removed from session object: ', req.session);

    res.redirect('/');
  })






module.exports = router;
