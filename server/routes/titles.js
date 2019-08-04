const express = require('express');
const router = express.Router();
const TitleModel = require('../models/title.model');

//get all titles
router.get('/', function(req, res) {
  TitleModel
    .find()
    .then(titles => {
    res.json(titles)
  })
  .catch(err => res.json(err));
})

//search by title (use search fields in a query req)
router.get('/search?', function(req, res) {
  console.log(req.query)
  const titleName = req.query.name;
  const genre = req.query.genre;
  TitleModel
    .find({
      'TitleName' : {
        $regex: titleName, 
        $options: 'i' 
      },
      'Genres' : {
        $regex: genre, 
        $options: 'i'         
      }
    })
    .sort({'TitleName': 1})
    .then(titles => {
    res.json(titles)
  })
  .catch(err => res.json(err));
})

//get info for one title, may not need this
router.get('/:id', function(req, res) {
  TitleModel
    .find({
      'TitleId' : parseInt(req.params.id)
        })
    .then(titles => {
    res.json(titles)
  })
  .catch(err => res.json(err));
})

module.exports = router;
