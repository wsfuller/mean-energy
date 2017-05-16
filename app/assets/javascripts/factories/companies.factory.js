
angular.module('meanEnergy').factory('CompanyFactory', ['$http', function($http) {

    var Company = {};
    var API_URL = 'http://localhost:3004/api/v1/';

    Company.getCompanies = function (response) {
      return $http.get(API_URL + 'companies');
    };

    Company.getCompany = function(companyId, response){
      console.log('factory company id', companyId);
      return $http.get(API_URL + 'companies/' + companyId);
    };

    Company.getCompanyDrinks = function(drinkIds, response){
      console.log('factory drink id', drinkIds);
      return $http(
        {
          method: 'GET',
          url: API_URL + 'drinks/',
          params: { "id[]": drinkIds }
        })
    };


    return Company;
}]);
