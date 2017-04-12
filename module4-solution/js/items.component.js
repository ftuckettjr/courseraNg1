
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .component('items', {
	  //template: 'testing...',
    templateUrl: 'views/item-detail.template.html',
    bindings: {
      items: '<'
    }
  });

})();
