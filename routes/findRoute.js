const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();



const apiKey = process.env.api_key;
const apiSecret = process.env.api_secret;

// Import module
var petfinder = require('petfinder')('apiKey','apiSecret');

// Get list of breeds
petfinder.getBreedList('dog', function(err, breeds) {
  let petBreeds = JSON.parse(breeds);
  console.log(petBreeds)
});




router.get('/find', function(req, res) {
  // console.log('In find route: ', req.session.userid);
  // knex('pets')
  // .where('user_id', req.session.userid)
  // .then(function(pets) {
  //   console.log('got data: ', pets);
    // res.render('find.ejs', {pets});
    res.render('find.ejs');
  // })
});





module.exports = router;