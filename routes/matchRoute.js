const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();




router.get('/match', function(req, res) {
  // console.log('In find route: ', req.session.userid);
  // knex('pets')
  // .where('user_id', req.session.userid)
  // .then(function(pets) {
  //   console.log('got data: ', pets);
    // res.render('find.ejs', {pets});
    res.render('match.ejs');
  // })
});





module.exports = router;
