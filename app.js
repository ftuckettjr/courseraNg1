
(function () {
  'use strict';

  //Single Responsibility
  angular.module('IndexHomeApp', ['ngRoute']);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['IndexHomeApp'], {strictDi: true});
  });

})();
