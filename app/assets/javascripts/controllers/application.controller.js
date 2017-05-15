angular.module('meanEnergy').controller('ApplicationController',[
  '$scope', '$document', '$mdDialog',
  function($scope, $document, $mdDialog){
    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
         .clickOutsideToClose(true)
         .title('Disclaimer')
         .textContent('This application is by by no means affiliated with any of the mentioned companies or products including Red Bull, Monster, Rockstar, NOS, Amp, Full Throttle, Xyience Xenergy, Arizona Energy, Rip It, Venom, Mountain Dew Kickstart, or any parent or subsidiary of these or any other brands or products mentioned in this application. All information is gathered by public forums including product pages, wikipedia, Google Search, and various websites. This application is for educational use only and is not intended to be used as a guide for any use of these products. This application does not endorse any products, the use of energy drinks, or support of any company or subsidiary and is completely independent in presenting information found on public domains. Please drink these drinks responsibly.')
         .ariaLabel('Disclaimer Dialog')
         .ok('Close')
         .targetEvent(ev)
       );
     };
}]);
