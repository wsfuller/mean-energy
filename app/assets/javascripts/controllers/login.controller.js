angular.module('meanEnergy').controller('LoginController',[
  '$scope',
  'Login',
  function($scope, Login){
    $scope.submitLogin = function(user){
      var user = $scope.user
      console.log('login requested', user);
      Login.login(user);
    }
  }]);
