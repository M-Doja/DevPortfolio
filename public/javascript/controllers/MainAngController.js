angular.module('AngMtr').controller('MainAngController', function($http, $state){
  var vm = this;
  console.log('The Main Page');
  vm.pageClass = 'page-home';
  vm.pageClass = 'page-about';
  vm.pageClass = 'page-contact';



});
