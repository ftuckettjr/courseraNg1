(function(){
  'use strict';

    angular.module('ShoppingListCheckOff')
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var someValue = '';
        var service = {
            swap: swap,
            someValue: someValue,
            validate: validate
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
