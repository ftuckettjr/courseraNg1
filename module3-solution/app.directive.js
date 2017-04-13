
(function () {
  'use strict';

  //Single Responsibility
  angular.module('NarrowItDownApp')
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<itemsFound',
        removeItem: '&'
      },
      restrict: 'AEC',
      replace: false,
      controller: FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true//,
      //link: FoundItemsDirectiveLink,
      //transclude: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    /* jshint validthis: true */
    var list = this;
  }

  /*function FoundItemsDirectiveLink(scope, element, attrs, controller) {
    console.log("Link scope is: ", scope);
    console.log("Controller instance is: ", controller);
    console.log("Element is: ", element);

    scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
      console.log("Old value: ", oldValue);
      console.log("New value: ", newValue);

      if (newValue === true) {
        displayCookieWarning();
      }
      else {
        removeCookieWarning();
      }
    });

    function displayCookieWarning() {
      // Using Angular jqLite
      // var warningElem = element.find("div");
      // warningElem.css('display', 'block');

      // If jQuery included before Angular
      var warningElem = element.find("div.error");
      warningElem.slideDown(900);
    }

    function removeCookieWarning() {
      // Using Angular jqLite
      // var warningElem = element.find('div');
      // warningElem.css('display', 'none');

      // If jQuery included before Angular
      var warningElem = element.find('div.error');
      warningElem.slideUp(900);
    }
  }*/

})();
