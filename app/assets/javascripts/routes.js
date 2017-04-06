angular.module('meanEnergy').config(function(
  $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $stateProvider.state('home',{
      url: '/',
      templateUrl: './views/home.html',
    })
});
