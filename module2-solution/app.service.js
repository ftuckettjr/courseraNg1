(function(){
  'use strict';

    angular.module('ShoppingListCheckOff')
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var items = {
          toBuy: [{
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
          }],
          hadBought: []
        };

        var service = {
            swap: swap,
            someVitemsalue: items
        };
        return service;

        ////////////

        function swap() {
            /* */
        };

        function validate() {
            /* */
        };
    }

})();
