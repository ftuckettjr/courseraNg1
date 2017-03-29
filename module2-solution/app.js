
(function(){
  'use strict';

  //Single Responsibility
  angular.module('ShoppingListCheckOff', ['ngRoute']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['ShoppingListCheckOff'], {strictDi: true});
  });

})();
