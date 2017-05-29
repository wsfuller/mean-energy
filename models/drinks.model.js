var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  created_at:{
    type: Date,
    default: Date.now
  }

});

var Drink = module.exports = mongoose.model('Drink', DrinkSchema);

// Get Drinks
module.exports.getDrinks = function(callback, limit){
  Drink.find(callback).limit(limit).sort([['name', 'ascending']]);
}

// Get Drink
module.exports.getDrinkById = function(id, callback){
  Drink.findById(id, callback);
}

// Add Drink
module.exports.addDrink = function(drink, callback){
  var add = {
    name: drink.name,
    tagline: drink.tagline
  }
  Drink.create(add, callback);
}

// Update Drink
module.exports.updateDrink = function(id, drink, options, callback){
  var query = {_id: id};
  var update = {
    name: drink.name,
    tagline: drink.tagline
  }
  Drink.findOneAndUpdate(query, update, options, callback);
}

// Remove Drink
module.exports.deleteDrink = function(id, callback){
  var query = {_id: id};
  Drink.remove(query, callback);
}
