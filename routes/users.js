var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // actual path '/' = '/users'
  res.send('respond with a resource');
});

//
// REGISTER
//__________________________________________________

// GET
router.get('/register', function(req, res, next) {
  // actual path '/' = '/users/register'
  res.render('register', {title: 'Register'});
});

// POST
router.post('/register', function(req, res, next){
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var passwordConfirm = req.body.passwordConfirm;

  // Form Validator
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('passwordConfirm', 'Passwords do not match').equals(req.body.password);

  // Check Errors
  var errors = req.validationErrors();

  if(errors){
    console.log('Errors');
    res.render('register',{
      errors: errors
    });
  } else {
    req.flash('success', 'Ran Validation and what not');
    res.location('/');
    res.redirect('/');
  }
});











//
// LOGIN
//__________________________________________________
router.get('/login', function(req, res, next) {
  // actual path '/' = '/users/login'
  res.render('login', {title: 'Login'});
});

module.exports = router;
