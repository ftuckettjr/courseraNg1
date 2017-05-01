(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath', '$q'];
function UserService($http, ApiPath, $q) {
  var service = this;

  service.savedFavorite = "";

}

})();
