(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath', '$q'];
function MenuService($http, ApiPath, $q) {
  var service = this;

  service.savedFavorite = "";

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteItem = getFavoriteItem;

  function getFavoriteItem(short_name) {
    /*var config = {};
    if (category) {
      config.params = {'category': category};
    }*/

    //https://davids-restaurant.herokuapp.com/menu_items.json?category=
    service.savedFavorite = short_name;

    return $http.get('https://kiltedvikingrestaurant.herokuapp.com/menu_items/' + short_name + '.json')
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        return $q.reject(response.data);
      });
  }

}

})();
