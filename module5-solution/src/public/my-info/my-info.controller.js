
(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'UserService'];
function MyInfoController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.favorite = UserService.savedFavorite;
  $ctrl.success = "";

}

})();
