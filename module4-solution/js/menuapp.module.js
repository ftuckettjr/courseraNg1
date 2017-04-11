
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp', ['ui.router', 'data']);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['MenuApp'], {strictDi: true});
  });

})();
