angular.module('AngMtr', ['ui.router', 'ngMaterial', 'ngRoute', 'ngAnimate','ui.bootstrap' ]).config(function( $stateProvider, $urlRouterProvider, $routeProvider ){
    $stateProvider
    .state('Home', {
      url: "/",
      templateUrl:"/components/HomePage.html",
      controller: 'MainAngController'
    })
    .state('AddProductPage', {
      url: "/add_product/",
      templateUrl: "/components/AddProductPage.html",
      controller: 'MainAngController as vm'
    })
    .state('SingleProductPage', {
      url: "/single_product",
      templateUrl: "/components/SingleProductPage.html",
      controller: 'MainAngController as vm'
    })
    .state('ShopPage', {
      url: "/shop",
      templateUrl: "/components/ShopPage.html",
      controller: 'MainAngController as vm'
    })
    .state('ShopAdminPage', {
      url: "/shop_admin",
      templateUrl: "/components/ShopAdminPage.html",
      controller: 'MainAngController as vm'
    })
    .state('UserProfile', {
      url: "/profile:id",
      templateUrl: "/components/UserProfile.html",
      controller: 'MainAngController as vm'
    })
    .state('Login', {
      url: "/login",
      templateUrl: "/components/Login.html",
      controller: 'MainAngController as vm'
    });
    $urlRouterProvider.otherwise('/');
});
//
// AngMtr.controller('MainAngController', function($scope) {
//     $scope.pageClass = 'page-home';
//     $scope.pageClass = 'page-about';
//     $scope.pageClass = 'page-contact';
// });
