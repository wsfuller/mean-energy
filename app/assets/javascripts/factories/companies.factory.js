
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


    return Company;
}]);
