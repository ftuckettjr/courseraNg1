
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['items'];
  function ItemDetailController(items) {
    /* jshint validthis: true */
    var itemDetail = this;
    itemDetail.items = items;
  }

})();
