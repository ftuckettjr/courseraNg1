
(function(){
  'use strict';

    angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      /* jshint validthis: true */
      var vm = this;

      vm.searchTerm = "";

      vm.getMatchedMenuItems = getMatchedMenuItems;
      vm.removeItem = removeItem;

      function getMatchedMenuItems() {
        MenuSearchService.getMatchedMenuItems(vm.searchTerm)
        .then(function(result) {
          vm.found = result;
        })
        .catch(function(error) {
          vm.found = [];
        });
      }

      function removeItem(index) {
        MenuSearchService.removeItem(index);
      }

    }

})();
