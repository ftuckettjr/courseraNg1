
(function () {
  'use strict';

  //Single Responsibility
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    /* jshint validthis: true */
    var service = this;

    service.getCategories = [];
    service.getItemCategory = [];

    service.getAllCategories = getAllCategories;
    service.getItemsForCategory = getItemsForCategory;

    function getAllCategories() {
      //reset array
      service.getCategories = [];

      return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'
        })
        .then(function (result) {
          /*var name = "";

          var resultSet = result.data;

          for (var i = 0; i < resultSet.length; i++) {
            name = resultSet[i];

            service.getCategories.push(name);
          }*/

          service.getCategories = result.data;

          // return processed items
          return service.getCategories;
      });
      //don't catch b/c subsequent .then() does not capture this current error
      /*.catch(function (error) {
        return foundItems;//error.data;
      })*/
    }

    function getItemsForCategory(categoryShortName) {
      //reset array
      service.getItemCategory = [];

      return $http({
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
        })
        .then(function (result) {
          /*var name = "";

          var resultSet = result.data.menu_items;

          for (var i = 0; i < resultSet.length; i++) {
            name = resultSet[i];

            service.getItemCategory.push(name);
          }*/

          service.getItemCategory = result.data;

          // return processed items
          return service.getItemCategory;
      });
      //don't catch b/c subsequent .then() does not capture this current error
      /*.catch(function (error) {
        return foundItems;//error.data;
      })*/
    }

  }

})();
