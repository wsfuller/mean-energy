var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var config = require('../config/main');

var Drink = require('../models/drinks.model.js');

router.use(function(req, res, next){
  next();
});

//
// GET REQUESTS
//__________________________________________________


router.route('/')
  // Get ALL Drinks
  .get(function(req, res){
    Drink.getDrinks(function(err, drinks){
      if(err){
        console.log('Error getting Drinks', err);
        res.send(err);
      }
      res.json(drinks);
    });
  })
  // Add Drink
  .post(function(req, res){
    var drink = req.body;
    Drink.addDrink(drink, function(err, drink){
      if(err){
        console.log('Error adding Drink', err);
        res.send(err);
      }
      res.json(drink)
    });
  });


router.route('/:id')
  // Get Drink by ID
  .get(function(req, res){
    Drink.getDrinkById(req.params.id, function(err, drink){
      if(err){
        console.log('Error getting Drink by ID', err);
        res.send(err);
      }
      res.json(drink);
    });
  })
  // Update Drink
  .put(function(req, res){
    var id = req.params.id;
    var drink = req.body;
    Drink.updateDrink(id, drink, {}, function(err, drink){
      if(err){
        console.log('Error updating Drink', err);
        res.send(err);
      }
      res.json(drink);
    });
  })
  // Delete Drink
  .delete(function(req, res){
    var id = req.params.id;
    Drink.deleteDrink(id, function(err, drink){
      if(err){
        console.log('Error deleting Drink', err);
        res.send(err);
      }
      res.json(drink);
    });
  });














module.exports = router;
