
(function(){
  'use strict';

  //Single Responsibility
  angular.module('NarrowItDownApp', ['ngRoute']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['NarrowItDownApp'], {strictDi: true});
  });

})();
