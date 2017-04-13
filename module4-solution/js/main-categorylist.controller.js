
(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainCategoryListController', MainCategoryListController);

  MainCategoryListController.$inject = ['MenuDataService', 'categories'];
  function MainCategoryListController(MenuDataService, categories) {
    /* jshint validthis: true */
    var mainList = this;
    mainList.categories = categories;
  }

})();
