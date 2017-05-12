angular.module('meanEnergy').controller('CompaniesController',[
  '$scope',
  'Company',
  function($scope, Company){
    $scope.getCompanies = function(){
     Company.getCompanies.then(function(data){
          $scope.companies = data;
     });
   };
  }]);
