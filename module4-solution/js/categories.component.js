
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .component('categories', {
	//template: 'testing...',
    templateUrl: 'views/categorylist.template.html',
    bindings: {
      categories: '<'
    }
  });

})();
