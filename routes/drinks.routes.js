var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var multer  = require('multer');
var passport = require('passport');
var config = require('../config/main');
//var upload = multer({ dest: 'uploads/images' })
var upload = multer({
    dest: 'uploads/images',
    fileFilter: function (req, file, callback) {
      console.log('running upload file filter');
        var fileType = file.mimetype;
        if(fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/gif' && fileType !== 'image/jpg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
}).single('image');


var Drink = require('../models/drinks.model.js');

router.use(function(req, res, next){
  next();
});

checkImageType = function(image){
  console.log('check image', image)
  // Checking to see if an image has been uploaded
  if(typeof image !== "undefined"){
    console.log('check image type there was an image');
    // Checking the mime type of the file uploaded must be JPEG or PNG only
    if(image.mimetype !== "image/jpeg" && image.mimetype !== "image/png"){
      //res.status(500).send();
      image = {error: "Your image must be JPEG or PNG"};
    }
  } else {
    // If there is no image uploaded set the drinkImage to a blank object so it does not error out in the drinks.model.js
    image = image;
  }
  return image;
}

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
  .post(passport.authenticate('jwt', { session: false }), upload, function(req, res, next){
    var drink = req.body;
    var drinkImage = req.file;
    console.log('DRINK IMAGE', drinkImage);

    Drink.createDrink(drink, drinkImage, function(err, drink, drinkImage){
      console.log('creating drink');
      if(err){
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
  .put(passport.authenticate('jwt', { session: false }), function(req, res){
    var id = req.params.id;
    var drink = req.body;
    Drink.updateDrink(id, drink, {}, function(err, drink){
      if(err){
        console.log('Error updating Drink', err);
        res.send(err);
      }
      res.json({"message": "Your Drink has been Updated Successfully"});
    });
  })
  // Delete Drink
  .delete(passport.authenticate('jwt', { session: false }),function(req, res){
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
