angular.module('AngMtr').controller('AddCarController', function($http, $state){
  var vm = this;

  vm.NewCar = {};
  console.log(vm.NewCar);

  vm.dealership = [];
  console.log(vm.dealership);

  vm.dealership.push(vm.NewCar);
  console.log(vm.dealership);

  vm.addNewCar = function(){
    vm.dealership.push(vm.NewCar);
    console.log(vm.dealership);
    $http.post('https://brilliant-fire-3806.firebaseio.com/.json', vm.NewCar).success(function(res){
      $state.go('home');
    });
  }
  vm.ShowCars = function() {
    $http.get("https://brilliant-fire-3806.firebaseio.com/.json").success(function(res){
        vm.dealership = [];
        console.log(vm.dealership);
        for(var prop in res){
          res[prop]._id = prop;
          vm.dealership.push(res[prop]);
          console.log(vm.dealership);
        }
    });
  }
  vm.ShowCars();
  vm.deleteCar  = function(id){
      $http.delete("https://brilliant-fire-3806.firebaseio.com/" + id + "/.json").success(function(){
        console.log(vm.NewCar);
        vm.ShowCars();

      });
    }

});
