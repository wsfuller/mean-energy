
angular.module('meanEnergy').factory('Company', ['$http', function($http) {
    return {
        getCompanies: (function(response) {
            return $http.get('http://localhost:3004/api/v1/companies')
            .then(function(response) {
              console.log("coming from servicejs", response.data);
              return response.data;
            });
        })()
    };
    return Company;
}]);
