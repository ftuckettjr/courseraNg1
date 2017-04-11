
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'views/categorylist.template.html',
    bindings: {
      categories: '<'
    }
  });

})();
