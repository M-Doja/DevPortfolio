angular.module('AngMtr').controller('MainAngController', function($http, $state,$scope, $mdDialog, $mdMedia){
  var vm = this;
  vm.pageClass = 'page-home';
  vm.pageClass = 'page-about';
  vm.pageClass = 'page-contact';
  vm.myInterval = 3000;

  vm.Front = false;
  vm.Back = false;
  vm.seeFront = false;
  vm.seeBack = false;
  vm.goBack = false;
  vm.startbtn = false;
  vm.start = true;

  vm.FrontBadge = function() {
    vm.Front = true;
    vm.Back = false;
    vm.seeFront = false;
    vm.seeBack = true;
    vm.goBack = true;
    vm.startBtn = false;
  }
  vm.BackBadge = function() {
    vm.Back = true;
    vm.Front = false;
    vm.seeFront = true;
    vm.seeBack = false;
    vm.goBack = true;
    vm.startBtn = false;
  }
  vm.startProg = function() {
    vm.seeFront = true;
    vm.seeBack = true;
    vm.start = false;
  }
  vm.quit = function() {
    vm.Front = false;
    vm.Back = false;
    vm.seeFront = false;
    vm.seeBack = false;
    vm.goBack = false;
    vm.startbtn = false;
    vm.start = true;
  }

  vm.slides = [
    {
      name: "HTML",
      image: '/img/HTML5_badge.png'
    },
    {
      name: "CSS",
      image: '/img/CSS3_badge.png'
    },
    {
      name: "JAVASCRIPT",
      image: '/img/Javascript_badge.png'
    },
    {
      name: "JQUERY",
      image: '/img/jQurery_badge.jpg'
    },
    {
      name: "ANGULAR",
      image : '/img/Angular_badge.png'
    },
    {
      name: "MONGO DB",
      image : "/img/Mongo_badge.png"
    },
    {
      name: "NODE",
      image : "/img/Node_badge.png"
  }
  ];





  vm.skillIcon = [
    {
      name: "HTML",
     badge: "/img/HTML5_badge.png"
  },
    {
      name: "CSS",
      badge : "/img/CSS3_badge.png"
  },
    {
      name: "JAVASCRIPT",
      badge : "/img/Javascript_badge.png"
  },
    {
      name: "JQUERY",
      badge : "/img/jQurery_badge.jpg"
  },
    {
      name: "ANGULAR",
      badge : "/img/Angular_badge.png"
  },
    {
      name: "MONGO DB",
      badge : "/img/Mongo_badge.png"
  },
    {
      name: "NODE",
      badge : "/img/Node_badge.png"
  }];

  vm.skillCon = [
    {
      name: "METEOR",
      badge : "/img/Meteor_badge.png"
  },
    {
      name: "EXPRESS",
      badge : "/img/Expressjs_badge.png"
 },
   {
     name: "WORDPRESS",
     badge : "/img/WordPress_badge.png"
}];







});
