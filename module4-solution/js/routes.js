
(function () {
  'use strict';

  //Single Responsibility
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'views/home.template.html'
    })

    // Premade list page
    .state('category', {
      url: '/main-category',
      templateUrl: 'views/main-category.template.html',
      controller: 'MainCategoryListController as catList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Item detail
    .state('items', {
      url: '/item-detail/{itemId}',
      templateUrl: 'views/main-item.template.html',
      controller: 'ItemDetailController as itemDetail',
      /*params: {
        itemId: null
      },*/
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    })

    // Premade list page
    .state('category2', {
      url: '/main-category2',
      templateUrl: 'views/main-category.template2.html',
      controller: 'MainCategoryListController as catList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    // Item detail
    .state('category2.items', {
      url: '/item-detail/{itemId}',
      templateUrl: 'views/main-item.template2.html',
      controller: 'ItemDetailController as itemDetail',
      params: {
        itemId: ''
      },
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    });

  }

})();
