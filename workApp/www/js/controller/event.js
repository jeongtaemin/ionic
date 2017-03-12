'use strict';


angular.module('starter')

.controller('eventCtrl', function($scope, $stateParams, $window, $http, $location, $state, bbsUrlFactory, companyListFactory, modalService, loadingService, $localstorage, Architimes_app_url){
	$scope.data = {};
	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)
	console.log("현재 url? " + strCate1)

	$scope.event_open = function(){
		modalService.openModal('templates/modal/event.html');
	};

	$scope.event_close = function(){
		modalService.closeModal();
	};

	$scope.request = function(){
		console.log($scope.data.strName, $scope.data.strTel,  $scope.data.strArea)
	};

})
