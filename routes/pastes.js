//
var express = require('express');
var router = express.Router();

//import our model for database operations
var Paste = require('../models/paste');


router.route('/')
    .get ( (req, res) => {
      res.render('index', { title: 'Hello Paste!' });
    });

router.route('/:token')
    .get ( (req, res) => {
      //do Something here
    });

module.exports = router;
