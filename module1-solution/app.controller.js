(function(){
  'use strict';

    angular.module('LunchCheck')
    .controller('LunchCheckController', LunchCheckController);

    //LunchCheckController.$inject = [];
    function LunchCheckController() {
      /* jshint validthis: true */
      var vm = this;
      vm.lunch = "";
      vm.lunchCheckResult = "";
      vm.textColor = "";
      vm.borderColor = "";

      vm.submit = submit;

      ////////////

      function skipEmpty(lunchList) {
        var size = 0;

        for (var i = 0; i < lunchList.length; i++) {
          //trim list items and check length again
          if (lunchList[i].trim().length > 0) {
            size++;
          }
        }

         return size;
      }

      function submit() {
        //<= 3 Enjoy!
        //> 3 Too much!
        //else: Please enter data first

        var lunchList = vm.lunch.split(",");
        var lunchListLength = lunchList.length;
        var size = 3;
        var min = 0;

        var result = "";

        var validListLength = skipEmpty(lunchList);

        if (validListLength == min) {
          result = "Please enter data first";
          vm.textColor = "red";
          vm.borderColor = "red";
        }
        else if (validListLength > min && validListLength <= size) {
          result = "Enjoy!";
          vm.textColor = "green";
          vm.borderColor = "green";
        }
        else if (validListLength > size) {
          result = "Too much!";
          vm.textColor = "green";
          vm.borderColor = "green";
        }

        vm.lunchCheckResult = result;
      }
    }

})();
