angular.module('meanEnergy').controller('CompaniesController',[
  '$scope',
  '$stateParams',
  'CompanyFactory',
  function($scope, $stateParams, CompanyFactory){

    var companyId = $stateParams.id;
    //var drinkId = 1;
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
          var drinkIds = $scope.company.drinks;
          if(drinkIds){
            CompanyFactory.getCompanyDrinks(drinkIds)
              .then(function(response){
                console.log('Company get drinks', response);
                $scope.drinks = response.data;
              }, function(error){
                console.log('Get Company Drinks Error', error);
              });
          }
        }, function (error){
          console.log('Get Company Error:', error);
        });
    };

    $scope.getCompanyDrinks = function(){
      console.log('get company drinks');
      CompanyFactory.getCompanyDrinks()
        .then(function (response){
          $scope.drink = response.data;
          console.log('Drink Details', $scope.drink);
        }, function (error){
          console.log('Ger Company Error:', error);
        });
    }
  }]);
