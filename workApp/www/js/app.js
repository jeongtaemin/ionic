// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova', 'ionicLazyLoad'])

.value('AppName', 'Architimes')
.value('Architimes_basic_url', 'http://www.architimes.co.kr/html')
.value('Architimes_app_url', 'http://www.architimes.co.kr/app')


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
      if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
              $ionicPopup.confirm({
                  title: "Internet Disconnected",
                  content: "The internet is disconnected on your device."
              })
              .then(function(result) {
                  if(!result) {
                      ionic.Platform.exitApp();
                  }
              });
          }
      }

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl',
  })
  .state('event', {
    url: '/event',
    templateUrl: 'templates/event/view.html',
    controller: 'eventCtrl',
  })
  .state('find_id', {
    url: '/find_id',
    templateUrl: 'templates/member/find_id.html',
    controller: 'AccountCtrl',
  })
  .state('find_pwd', {
    url: '/find_pwd',
    templateUrl: 'templates/member/find_pwd.html',
    controller: 'AccountCtrl',
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/member/login.html',
    controller: 'AccountCtrl',
  })
  .state('join_1', {
    url: '/join/step1',
    templateUrl: 'templates/member/join_1.html',
    controller: 'JoinCtrl',
  })
  .state('join_2', {
    url: '/join/step2?joinType',
    templateUrl: 'templates/member/join_2.html',
    controller: 'JoinCtrl',
  })
  .state('co', {
    url: '/co/portfolio',
    templateUrl: 'templates/portfolio/list.html'
  })
  .state('co-portfolio-view', {
    url: '/co/portfolio/view?intId',
    templateUrl: 'templates/portfolio/view.html'
  })
  .state('co-find', {
    url: '/co/find',
    templateUrl: 'templates/portfolio/find.html',
    controller: 'findCtrl',
  })
  .state('co-find-map', {
    url: '/co/find/map',
    templateUrl: 'templates/portfolio/map.html',
    controller: 'findCtrl',
  })
  .state('co-find-area', {
    url: '/co/find/area',
    templateUrl: 'templates/portfolio/area.html',
    controller: 'findCtrl',
  })
  .state('co-find-com', {
    url: '/co/find/com',
    templateUrl: 'templates/portfolio/com.html',
    controller: 'findCtrl',
  })
  .state('ar', {
    url: '/ar/portfolio',
    templateUrl: 'templates/portfolio/list.html'
  })
  .state('ar-portfolio-view', {
    url: '/ar/portfolio/view?intId',
    templateUrl: 'templates/portfolio/view.html'
  })
  .state('ar-find', {
    url: '/ar/find',
    templateUrl: 'templates/portfolio/find.html',
    controller: 'findCtrl',
  })
  .state('ar-find-map', {
    url: '/ar/find/map',
    templateUrl: 'templates/portfolio/map.html',
    controller: 'findCtrl',
  })
  .state('ar-find-area', {
    url: '/ar/find/area',
    templateUrl: 'templates/portfolio/area.html',
    controller: 'findCtrl',
  })
  .state('ar-find-com', {
    url: '/ar/find/com',
    templateUrl: 'templates/portfolio/com.html',
    controller: 'findCtrl',
  })
  .state('ma', {
    url: '/ma/portfolio',
    templateUrl: 'templates/portfolio/list.html'
  })
  .state('ma-portfolio-view', {
    url: '/ma/portfolio/view?intId',
    templateUrl: 'templates/portfolio/view.html'
  })
  .state('ma-find', {
    url: '/ma/find',
    templateUrl: 'templates/portfolio/find.html',
    controller: 'findCtrl',
  })
  .state('ma-find-map', {
    url: '/ma/find/map',
    templateUrl: 'templates/portfolio/map.html',
    controller: 'findCtrl',
  })
  .state('ma-find-area', {
    url: '/ma/find/area',
    templateUrl: 'templates/portfolio/area.html',
    controller: 'findCtrl',
  })
  .state('ma-find-com', {
    url: '/ma/find/com',
    templateUrl: 'templates/portfolio/com.html',
    controller: 'findCtrl',
  })
  .state('news', {
    url: '/news',
    templateUrl: 'templates/news/list.html'
  })
  .state('news-view', {
    url: '/news/view?intId',
    templateUrl: 'templates/news/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('law', {
    url: '/law',
    templateUrl: 'templates/law/list.html'
  })
  .state('law-view', {
    url: '/law/view?intId',
    templateUrl: 'templates/law/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('comment', {
    url: '/comment?intId&strId',
    templateUrl: 'templates/comment.html',
    controller: 'commentActCtrl',
  })
  .state('travelog', {
    url: '/travelog',
    templateUrl: 'templates/travel/page.html'
  })
  .state('ando', {
    url: '/ando',
    templateUrl: 'templates/travel/list.html'
  })
  .state('ando-view', {
    url: '/ando/view?intId',
    templateUrl: 'templates/travel/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('newyork', {
    url: '/newyork',
    templateUrl: 'templates/travel/list.html'
  })
  .state('newyork-view', {
    url: '/newyork/view?intId',
    templateUrl: 'templates/travel/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('chicago', {
    url: '/chicago',
    templateUrl: 'templates/travel/list.html'
  })
  .state('chicago-view', {
    url: '/chicago/view?intId',
    templateUrl: 'templates/travel/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('toronto', {
    url: '/toronto',
    templateUrl: 'templates/travel/list.html'
  })
  .state('toronto-view', {
    url: '/toronto/view?intId',
    templateUrl: 'templates/travel/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('barca', {
    url: '/barca',
    templateUrl: 'templates/travel/list.html'
  })
  .state('barca-view', {
    url: '/barca/view?intId',
    templateUrl: 'templates/travel/view.html',
    controller: 'bbsViewCtrl',
  })
  .state('webtoon', {
    url: '/webtoon',
    templateUrl: 'templates/webtoon/list.html',
    controller: 'webtoonCtrl',
  })
  .state('webtoon-view', {
    url: '/webtoon/view?intId',
    templateUrl: 'templates/webtoon/view.html',
    controller: 'webtoonViewCtrl',
  })
 .state('agreement1', {
    url: '/agreement1',
    templateUrl: 'templates/agreement/1.html',
  })
 .state('agreement2', {
    url: '/agreement2',
    templateUrl: 'templates/agreement/2.html',
  })
  .state('agreement3', {
    url: '/agreement3',
    templateUrl: 'templates/agreement/3.html',
  })
  .state('content1', {
    url: '/content1',
    templateUrl: 'templates/content1.html',
    controller: 'newsCtrl',
  })
  .state('content2', {
    url: '/content2',
    templateUrl: 'templates/content2.html',
    controller: 'content2Ctrl',
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});