
(function () {
  'use strict';

  //Single Responsibility
  angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q) {
    /* jshint validthis: true */
    var service = this;

    service.foundItems = [];

    service.getMatchedMenuItems = getMatchedMenuItems;
    service.removeItem = removeItem;

    ////////////

    function getMatchedMenuItems(searchTerm) {
      /* */

      //if no value entered
      if (searchTerm.length === 0) {
        return $q.reject();
      }

      //reset array
      service.foundItems = [];

      return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        })
        .then(function (result) {
          var description = "";

          var resultSet = result.data.menu_items;

          for (var i = 0; i < resultSet.length; i++) {
            description = resultSet[i].description;

            if (description.toLowerCase().indexOf(searchTerm) !== -1) {
              service.foundItems.push(resultSet[i]);
            }
          }

          // return processed items
          return service.foundItems;
      })
      //don't catch b/c subsequent .then() does not capture this current error
      /*.catch(function (error) {
        return foundItems;//error.data;
      })*/
      ;
    }

    function removeItem(index) {
      /* */
      service.foundItems.splice(index, 1)

      return service.foundItems;
    }

  }

})();
