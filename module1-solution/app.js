(function(){
  'use strict';

  //Single Responsibility
  angular.module('LunchCheck', ['ngRoute']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['LunchCheck'], {strictDi: true});
  });

})();
