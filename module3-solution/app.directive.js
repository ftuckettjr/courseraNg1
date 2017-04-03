(function(){
  'use strict';

    angular.module('NarrowItDownApp')
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          found: '<itemsFound',
          //searchTerm: '<searchItem',
          //searchForMatch: '&',
          //myTitle: '@title',
          removeItem: '&'
        }//,
        //controller: ShoppingListDirectiveController,
        //controllerAs: 'list',
        //bindToController: true,
        //link: ShoppingListDirectiveLink,
        //transclude: true
      };

      return ddo;
    }

})();
