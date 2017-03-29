(function(){
  'use strict';

  //Single Responsibility
  angular.module('LunchCheck')
  .config(config);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'index.lunchcheck.html',
              controller: 'LunchCheckController',
              controllerAs: 'vm'
          });
  }

})();
