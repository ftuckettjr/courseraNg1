/*
(function(){
  'use strict';

  //Single Responsibility
  angular.module('ShoppingListCheckOff')
  .config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'index.checkoff.html',
              controller: 'LunchCheckController',
              controllerAs: 'vm'
          });
  }

})();
*/
