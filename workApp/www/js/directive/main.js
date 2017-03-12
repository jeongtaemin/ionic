'use strict';
var mainTrabelSlider = '';

angular.module('starter')

// 메인 건축여행기 슬라이드
.directive('uixBxslider', function(){
    return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
          $scope.$on('repeatFinished', function () {
              mainTrabelSlider = iElm.t_bxSlider($scope.$eval('{' + iAttrs.uixBxslider + '}'));
          });
        }
    }
}).directive('notifyWhenRepeatFinished', ['$timeout',
    function ($timeout) {
        return {
          restrict: 'A',
          link: function ($scope, iElm, iAttrs) {
              if ($scope.$last === true) {
                  $timeout(function () {
                      $scope.$emit('repeatFinished');
                  });
              }
          }
        }
    }
]).directive('bxBtns',function() {
    return {
       restrict: 'A',
       template: '<span id="travel-slider-prev"></span><span id="travel-slider-next"></span>',
       link:function($scope, iElm, iAttrs){
          iElm.on('click', function(){
              mainTrabelSlider.stopAuto();
              mainTrabelSlider.startAuto();
          })
       }   
    }; 
})