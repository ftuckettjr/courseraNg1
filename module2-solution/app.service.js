
(function () {
  'use strict';

  //Single Responsibility
  angular.module('ShoppingListCheckOff')
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    /* jshint validthis: true */
    var service = this;

    var items = {
      toBuy: [
        {
          name: "cookie",
          quantity: 1
        },{
          name: "milk",
          quantity: 2
        },{
          name: "orange",
          quantity: 3
        },{
          name: "bread",
          quantity: 4
        },{
          name: "cheese",
          quantity: 5
        }
      ],
      hadBought: [
        /*{
          name: "pickles",
          quantity: 6
        }*/
      ]
    };

    service.swap = swap;
    service.getToBuyItems = getToBuyItems;
    service.getHadBoughtItems = getHadBoughtItems;

    ////////////

    function swap(listIndex) {
      /* */
      var swapping = items.toBuy[listIndex];

      //reference
      items.toBuy.splice(listIndex, 1);

      items.hadBought.push(swapping);
    }

    function getToBuyItems() {
      /* */
      return items.toBuy;
    }

    function getHadBoughtItems() {
      /* */
      return items.hadBought;
    }
  }

})();
