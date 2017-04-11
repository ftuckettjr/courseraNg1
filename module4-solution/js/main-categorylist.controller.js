
(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainCategoryListController', MainCategoryListController);

  MainCategoryListController.$inject = ['MenuDataService', 'categories'];
  function MainCategoryListController(MenuDataService, categories) {
    var mainList = this;
    mainList.categories = categories;
  }

})();
