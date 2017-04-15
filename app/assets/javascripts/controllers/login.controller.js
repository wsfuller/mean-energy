angular.module('meanEnergy').controller('LoginController',[
  '$scope',
  'Login',
  'toastr',
  function($scope, Login, toastr){
    $scope.submitLogin = function(user){
      var user = $scope.user
      console.log('login requested', user);
      Login.login(user);
    }
  }]);
