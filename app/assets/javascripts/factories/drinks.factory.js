
angular.module('meanEnergy').factory('DrinkFactory', ['$http', function($http) {

    var Drink = {};
    var API_URL = 'http://localhost:3004/api/v1/';

    Drink.getDrinks = function (response) {
      return $http.get(API_URL + 'companies');
    };

    Drink.getDrinkDetails = function(id, response){
      console.log('factory drink id', id);
      return $http.get(API_URL + 'drinks/' + id);
    };



    return Drink;
}]);
