(function(){
  'use strict';

  angular.module('newbie', [])
    .controller('NameCalculatorController', NameCalculatorController);

  NameCalculatorController.$inject = ['$scope'];
  function NameCalculatorController($scope) {
    var vm = this;
    vm.name = "";

    vm.submit = submit;

    function submit() {
      alert("Thank you, " + vm.name);
    }
  }

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['newbie'], {strictDi: true});
  });
})();
