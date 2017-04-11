
(function () {
  'use strict';

  //Single Responsibility
  angular.module('ShoppingListCheckOff')
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    /* jshint validthis: true */
    var vm = this;

    //updated by reference
    vm.buyList = ShoppingListCheckOffService.getToBuyItems();

    vm.swap = swap;

    function swap(listIndex) {
      ShoppingListCheckOffService.swap(listIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    /* jshint validthis: true */
    var vm = this;

    //updated by reference
    vm.boughtList = ShoppingListCheckOffService.getHadBoughtItems();
  }

})();
