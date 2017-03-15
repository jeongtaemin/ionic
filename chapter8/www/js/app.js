// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic', 'firebase'])

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  var firstVisit = localStorage.getItem('firstVisit');
  if (!firstVisit) {
    $location.url('/tour');
  }


})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tour', {
      url: '/tour',
      templateUrl: 'views/tour/tour.html',
      controller: 'TourCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about/about.html'
    })
    .state('reservation', {
      url: '/reservation',
      templateUrl: 'views/reservation/reservation.html',
      controller: 'ReservationCtrl'
    })
    .state('events', {
      url: '/events',
      templateUrl: 'views/events/events.html',
      controller: 'EventsCtrl'
    })
    .state('food', {
      url: '/food',
      templateUrl: 'views/food/food.html',
      controller: 'FoodCtrl'
    })
    .state('weather', {
      url: '/weather',
      templateUrl: 'views/weather/weather.html',
      controller: 'WeatherCtrl'
    })
    .state('local', {
      abstract: true,
      url: '/local',
      templateUrl: 'views/local/local.html'
    })
    .state('local.food', {
      url: '/food',
      views: {
        'local-food': {
          templateUrl: 'views/local/food.html'
        }
      }
    })
    .state('local.beaches', {
      url: '/beaches',
      views: {
        'local-beaches': {
          templateUrl: 'views/local/beaches.html'
        }
      }
    })
    .state('local.sights', {
      url: '/sights',
      views: {
        'local-sights': {
          templateUrl: 'views/local/sights.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
})

.factory('EventsService', function ($firebase) {
  var firebase = new Firebase('https://ionic-in-action-demo.firebaseio.com/events');
  var service = $firebase(firebase);
  return service;
})

.factory('MenuService', function ($firebase) {
  var firebase = new Firebase('https://ionic-in-action-demo.firebaseio.com/menu');
  var service = $firebase(firebase);
  return service;
})

.controller('NavbarCtrl', function ($scope, $ionicSideMenuDelegate) {

  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
});