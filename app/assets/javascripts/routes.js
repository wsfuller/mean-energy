angular.module('meanEnergy').config(function(
  $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });

    $stateProvider.state('home',{
      url: '/',
      templateUrl: './views/companies.html',
      controller: "CompaniesController"
    })
    .state('login',{
      url: '/login',
      templateUrl: './views/login.html',
      controller: "LoginController"
    })
    .state('admin-dashboard',{
      url: '/dashboard',
      templateUrl: './views/admin-dashboard.html'
    })
    .state('drinks', {
      url: '/drinks',
      templateUrl: './views/drinks.html'
    })
    .state('drink-profile',{
      url: '/drinks/:id',
      templateUrl: './views/drinks-profile.html'
    })
    .state('company-profile',{
      url: '/companies/:id',
      templateUrl: './views/company-profile.html',
      controller: "CompaniesController"
    })
    .state('about', {
      url: '/about-project',
      templateUrl: './views/about.html'
    });

});
