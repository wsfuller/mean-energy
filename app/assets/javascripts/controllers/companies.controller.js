angular.module('meanEnergy').controller('CompaniesController',[
  '$scope',
  '$stateParams',
  'CompanyFactory',
  function($scope, $stateParams, CompanyFactory){

    var companyId = $stateParams.id;
    //console.log('location', $stateParams);

    $scope.getCompanies = function(){
      CompanyFactory.getCompanies()
        .then(function (response) {
          $scope.companies = response.data;
        }, function (error) {
          console.log('Get Companies Error:', error);
        });
    };

    $scope.getCompanyDetails = function(){
      CompanyFactory.getCompany(companyId)
        .then(function (response){
          $scope.company = response.data;
          console.log('Company Details', $scope.company);
        }, function (error){
          console.log('Get Company Error:', error);
        });
    };
  }]);
