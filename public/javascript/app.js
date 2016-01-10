angular.module('AngMtr', ['ui.router', 'ngMaterial', 'ngRoute', 'ngAnimate','ui.bootstrap' ]).config(function( $stateProvider, $urlRouterProvider, $routeProvider ){
    $stateProvider.state('Home', {
      url: "/",
      templateUrl:"/templates/home-2.html",
      controller: 'MainAngController'
    }).state('AddCar', {
      url: "/add_Car/",
      templateUrl: "/templates/AddCar.html",
      controller: 'AddCarController as vm'
    }).state('Skills', {
        url: "/skills",
        templateUrl: "/templates/skills.html",
        controller: 'MainAngController as vm'
      }).state('Projects', {
          url: "/projects",
          templateUrl: "/templates/projects.html",
          controller: 'MainAngController as vm'
        }).state('Contact', {
            url: "/contact",
            templateUrl: "/templates/contact.html",
            controller: 'MainAngController as vm'
          })
    $urlRouterProvider.otherwise('/');
});
//
// AngMtr.controller('MainAngController', function($scope) {
//     $scope.pageClass = 'page-home';
//     $scope.pageClass = 'page-about';
//     $scope.pageClass = 'page-contact';
// });
