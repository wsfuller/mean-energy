angular.module('meanEnergy').factory('Login', function ($http){

  var service = {};
  var login = "";

  service.login = function(user){
    // http POST user information to Node server and wait for response
    console.log('Login Factory', user);
  }

  return service;
});
