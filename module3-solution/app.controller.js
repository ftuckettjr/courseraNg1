
(function(){
  'use strict';

    angular.module('NarrowItDownApp')
    .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      /* jshint validthis: true */
      var vm = this;

      vm.searchTerm = "";
      /*vm.found = [
        {"id":877,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart"}
        ,{"id":878,"short_name":"A2","name":"Egg Drop Soup","description":"chicken broth with egg drop","price_small":2.25,"price_large":4.5,"small_portion_name":"pint","large_portion_name":"quart"}
      ];*/
      vm.found = [];

      vm.getMatchedMenuItems = getMatchedMenuItems;
      vm.removeItem = removeItem;

      function getMatchedMenuItems() {
        MenuSearchService.getMatchedMenuItems(vm.searchTerm)
        .then(function(result) {
          vm.found = result;
        })
        .catch(function(error) {
          console.log('Error Search');
        });
      }

      function removeItem(index) {
        MenuSearchService.removeItem(index);
      }

    }


})();
