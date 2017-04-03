(function(){
  'use strict';

    angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService);

    MenuSearchService.$inject = ['$http', '$q'];
    function MenuSearchService($http, $q) {
      var service = this;

      service.foundItems = [];

      service.getMatchedMenuItems = getMatchedMenuItems;
      service.removeItem = removeItem;

      ////////////

      function getMatchedMenuItems(searchTerm) {
        /* */

        service.foundItems = [];
        //console.log(searchTerm);

        //if no value entered
        if (searchTerm.length == 0) {
          return $q.reject();
        }

        return $http({
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
          })
          .then(function (result) {
            var description = "";
            //console.log(searchTerm);

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
        /*.catch(function (error) {
          return foundItems;//error.data;
        })*/
        ;
      };

      function removeItem(index) {
        /* */
        service.foundItems.splice(index, 1)

        return service.foundItems;
      };

    }

})();
