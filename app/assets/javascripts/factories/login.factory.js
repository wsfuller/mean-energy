angular.module('meanEnergy').factory('Login', function ($http, toastr){

  var service = {};
  var login = "";

  service.login = function(user){
    console.log('Login Factory', user);
    $http({
      method: 'POST',
      url: 'http://localhost:1337/api/v1/users/authenticate',
      header:{
        'Content-Type': 'application/json'
      },
      data:{
        "email": user.email,
        "password": user.password
      }
    }).then(function success(response){
      var results = response.data;
      console.log(response);
      if(results.success === false){
        toastr.error(results.message, 'Error');
      }
    },function error(response){
      console.log(response);
    });
  };

  return service;
});
