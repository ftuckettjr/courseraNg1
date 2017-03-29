
(function(){
  'use strict';

    angular.module('ShoppingListCheckOff')
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      /* jshint validthis: true */
      var vm = this;

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

      vm.boughtList = ShoppingListCheckOffService.getHadBoughtItems();
    }

})();
