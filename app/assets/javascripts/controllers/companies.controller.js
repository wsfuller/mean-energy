angular.module('meanEnergy').controller('CompaniesController',[
  '$scope',
  'Company',
  function($scope, Company){

    //getCompanies();

    $scope.getCompanies = function(){
      console.log('get companies');
     Company.getCompanies()
       .then(function (response) {
           $scope.companies = response.data;
       }, function (error) {
           $scope.status = 'Unable to load customer data: ' + error.message;
       });
    }

    $scope.getCompanyDetails = function(){

      console.log('get company details');
    }

  }]);
