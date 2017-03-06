var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Save user password in hashed format
UserSchema.pre('save', function(next){
  var user = this;
  if(this.isModified('password') || this.isNew){
    console.log('hit user model');
    bcrypt.genSalt(10, function(err, salt){
      console.log('generating salt');
      if(err){
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash){
        if(err){
          return next(err);
        }
        user.password = hash;
        console.log(user.password);
        next();
      });
    });
  } else {
    return next();
  }
});

// Compare input password with the one in the database
UserSchema.methods.comparePassword = function(pw, cb){
  bcrypt.compare(pw, this.password, function(err, isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
