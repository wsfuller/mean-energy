angular.module('meanEnergy').controller('CompaniesController',[
  '$scope',
  '$stateParams',
  'CompanyFactory',
  function($scope, $stateParams, CompanyFactory){

    console.log('location', $stateParams);

    $scope.getCompanies = function(){
      console.log('get companies');
     Company.getCompanies()
       .then(function (response) {
           $scope.companies = response.data;
       }, function (error) {
           $scope.status = 'Unable to load customer data: ' + error.message;
       });
    };

    $scope.getCompanyDetails = function(){

      console.log('get company details');
    };

  }]);
