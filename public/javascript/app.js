angular.module('AngMtr', ['ui.router', 'ngMaterial' ]).config(function( $stateProvider, $urlRouterProvider ){
    $stateProvider.state('home', {
      url: "/",
      templateUrl:"/templates/home.html",
      controller: 'MainAngController'
    }).state('AddCar', {
      url: "/add_Car/",
      templateUrl: "/templates/AddCar.html",
      controller: 'AddCarController as vm'
    })
    $urlRouterProvider.otherwise('/');
});
