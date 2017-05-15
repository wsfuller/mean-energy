
angular.module('meanEnergy').factory('CompanyFactory', ['$http', function($http) {

    var Company = {};

    Company.getCompanies = function (response) {
      return $http.get('http://localhost:3004/api/v1/companies');
    };

    Company.getCompany = function(response){
      return $http.get('http://localhost:3004/api/v1/companies/' + id);
    };


    return Company;
}]);
