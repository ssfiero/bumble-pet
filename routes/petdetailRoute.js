const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();








router.get('/petdetail', function(req, res) {
  res.render('petdetail.ejs');
});





module.exports = router;
