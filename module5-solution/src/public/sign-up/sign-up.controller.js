
(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.error = "";
  $ctrl.success = "";
  $ctrl.firstName = "f";
  $ctrl.lastName = "l";
  $ctrl.emailAddress = "f@l";
  $ctrl.phoneNum = "555-555-5555";
  $ctrl.favDish = "SP1";

  $ctrl.validate = validate;

  function validate() {
    $ctrl.error = "";
    $ctrl.success = "";

    MenuService.getFavoriteItem($ctrl.favDish)
    .then(function (result) {
      UserService.savedFavorite = result;

      $ctrl.success = "Your information has been saved.";
    })
    .catch(function (error) {
      //console.log(error);
      $ctrl.error = "No such menu number exists";
      UserService.savedFavorite = "";
    });
  }
}

})();
