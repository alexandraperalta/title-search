const express = require('express');
const router = express.Router();
const TitleModel = require('../models/title.model');


//get distinct genres
router.get('/', function (req, res) {
    TitleModel.distinct('Genres', function(error, genres) {
      res.json(genres)
    })
})

module.exports = router;
