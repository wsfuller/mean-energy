angular.module('meanEnergy').controller('DrinksController',[
  '$scope',
  '$stateParams',
  'DrinkFactory',
  function($scope, $stateParams, DrinkFactory){
    var id = $stateParams.id;

    $scope.getDrinkDetails = function(){
      DrinkFactory.getDrinkDetails(id)
      .then(function (response){
        $scope.drink = response.data;
        console.log('Drink Details', $scope.drink);
      }, function(error){
        console.log('Drink details error', error);
      });
    }
  }
])
