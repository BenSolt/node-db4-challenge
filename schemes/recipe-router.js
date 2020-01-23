const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  