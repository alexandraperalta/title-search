const express = require('express');
const router = express.Router();
const TitleModel = require('../models/title.model');

//get all titles
router.get('/titles', function(req, res) {
  TitleModel.find()
  .then(titles => {
    res.json(titles)
  })
  .catch(err => res.json(err));
})

module.exports = router;
