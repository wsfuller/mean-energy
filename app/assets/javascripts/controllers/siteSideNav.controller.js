angular.module('meanEnergy').controller('SiteSideNavController',[
    '$scope',
    '$timeout',
    '$mdSidenav',
    '$location',
    '$rootScope',
function(
    $scope,
    $timeout,
    $mdSidenav,
    $location,
    $rootScope){


    $scope.previousState = function(){
      if ($rootScope.previousState.url === '^'){
        $location.path('/home');
      }
      else{
        $location.path($rootScope.previousState.url);
      }
    };


  var originatorEv;

  $scope.toggleSideNav = buildDelayedToggler('site_sidenav');
  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }
  function buildDelayedToggler(navID) {
    return debounce(function() {
      $mdSidenav(navID)
        .toggle();
    }, 200);
  }
  function buildToggler(navID) {
    return function() {
      $mdSidenav(navID)
        .toggle();
    };
  }

  $scope.closeSideNav = function () {
    console.log('close the side nav');
    $mdSidenav('site_sidenav').close();
  };

}]);
