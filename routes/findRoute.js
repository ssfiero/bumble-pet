const config = require('../knexfile.js')['production'];
// const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();









router.get('/find', function(req, res) {
  res.render('find.ejs');
});





module.exports = router;
