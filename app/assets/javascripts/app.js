angular.module("meanEnergy",[
    'ngMaterial',
    'ui.router',
    'ngRetina',
    'ngAnimate',
    'toastr',
]).config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('purple',{
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': '900'
    })
    .accentPalette('cyan');
});
