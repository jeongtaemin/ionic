'use strict';


angular.module('starter')

.controller('findCtrl', function($scope, $stateParams, $window, $http, $location, $state, bbsUrlFactory, companyListFactory, modalService, loadingService, $localstorage, Architimes_app_url){

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)
	console.log("현재 url? " + strCate1)


	loadingService.show();
    companyListFactory.gets(strCate1)
	.then(function (response) {
    	$scope.list = response.data.records;
    })
    .finally(function (){
    	loadingService.hide();
    });

    $scope.list_more = function(){
		var cnt = $scope.list.length;
		var strCompanyName = $scope.search_com;
		if(!strCompanyName) strCompanyName = "";

		var strCompanyAddress = $scope.search_area;
		if(!strCompanyAddress) strCompanyAddress = "";

		loadingService.show();
		companyListFactory.more(strCate1, cnt, strCompanyName, strCompanyAddress)
		.then(function (response) {
	    	var data = response.data.records;
	    	var length = data.length;
	    	if(length>0){	
	    		$scope.list = $scope.list.concat(data);
	    	} else {
	    		alert('불러올 데이터가 없습니다.');
	    	} 
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });

	};

    $scope.do_search_company = function(){
    	var search = $scope.search_com;
    	if(!search){
    		alert("검색어를 입력해주세요.")
    		return;
    	} else {

	    	loadingService.show();
		    companyListFactory.search_gets(strCate1, search)
			.then(function (response) {
		    	$scope.list = response.data.records;
		    })
		    .finally(function (){
		    	loadingService.hide();
		    });
		}

	};

	$scope.do_search_area = function(){
    	var strCompanyAddress = $scope.search_area;
    	if(!strCompanyAddress){
    		alert("검색어를 입력해주세요.")
    		return;
    	} else {

	    	loadingService.show();
		    companyListFactory.search_area_gets(strCate1, strCompanyAddress)
			.then(function (response) {
		    	$scope.list = response.data.records;
		    })
		    .finally(function (){
		    	loadingService.hide();
		    });
		}

	};

	$scope.back = function () { 
         $window.history.back();
    };

})
