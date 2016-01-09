angular.module('AngMtr').controller('MainAngController', function($http, $state){
  var vm = this;
  console.log('The Main Page');
  vm.pageClass = 'page-home';
  vm.pageClass = 'page-about';
  vm.pageClass = 'page-contact';
  vm.myInterval = 3000;

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
