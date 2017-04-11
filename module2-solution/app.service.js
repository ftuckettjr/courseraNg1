
(function () {
  'use strict';

  //Single Responsibility
  angular.module('ShoppingListCheckOff')
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
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
      var item = items.toBuy.splice(listIndex, 1);

      items.hadBought.push(item[0]);
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
