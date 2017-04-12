
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['items'];
  function ItemDetailController(items) {
    var itemDetail = this;
    itemDetail.items = items;
    //console.log("items", items);
    /*var item = items[$stateParams.itemId];
    itemDetail.name = item.name;
    itemDetail.quantity = item.quantity;
    itemDetail.description = item.description;*/
  }

})();
