var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var config = require('../config/main');

var User = require('../models/users.model.js');

router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

// router.route('/dashboard')
//   .get(function(req, res){
//       res.json({message: 'User Deleted'});
//   });
//
// SECURED ROUTES (/api/v1/users/dashboard)
//__________________________________________________
router.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send('It worked! User id is: ' + req.user._id + '.');
});


//
//  /api/v1/users
//
router.route('/')
  // Fetch ALL Users
  .get(function(req, res){
    User.find(function(err, users){
      if(err){
        res.send(err);
      }
      res.json(users);
    });
  });

router.route('/:user_id')
  // Fetch SINGLE User
  .get(function(req, res){
    User.findById(req.params.user_id, function(err, user){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  })
  // Update User
  .put(function(req, res){
    console.log(req.body);
    User.findById(req.params.user_id, function(err, user){
      if(err){
        res.send(err);
      }
      user.name = req.body.name;
      user.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({ message: 'User updated!' });
      });
    });
  })
  .delete(function(req, res){
    User.remove({
      _id: req.params.user_id
    }, function(err, user){
      if(err){
        res.send(err);
      }
      res.json({message: 'User Deleted'});
    });
  });


//
// REGISTER (/api/v1/users/register)
//__________________________________________________
router.route('/register')
  .post(function(req, res){
    if(!req.body.email || !req.body.password){
      res.json({success: false, message: 'Please enter email and password'});
    } else {
      var newUser = new User({
        email: req.body.email,
        password: req.body.password
      });
      console.log('new user', newUser);
      newUser.save(function(err){
        if(err){
          console.log(err);
          return res.json({ success: false, message: 'Unable to save user, Email may already exist'});
        }
        res.json({ success: true, message: 'Successfully created new user.'});
      });
    }
  });

  //
  // AUTHENTICATE (/api/v1/users/authenticate)
  //__________________________________________________
  router.route('/authenticate')
    .post(function(req, res){
      User.findOne({
        email: req.body.email
      }, function(err, user){
        if(!user){
          res.send({ success: false, message: 'Authentication failed. User not found' });
        } else {
          user.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch && !err){
              var token = jwt.sign(user, config.secret,{
                expiresIn: 900 // seconds (15 minutes)
              });
              res.json({ success: true, token: 'JWT ' + token});
            } else {
              res.send({ success: false, message: 'Authentication failed. Passwords did not match'});
            }
          });
        }
      });
    });

module.exports = router;
