(function(){
  'use strict';

  //Single Responsibility
  angular.module('LunchCheck', ['ngRoute'])
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

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['LunchCheck'], {strictDi: true});
  });

})();
