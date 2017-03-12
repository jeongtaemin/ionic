'use strict';


angular.module('starter')

.controller('travelListCtrl', function($scope, $http, $location, travelListFactory, bbsUrlFactory, loadingService, Architimes_app_url){

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	var url_split = url.split( '/' );
	$scope.view_route = url_split[1];

	loadingService.show();
    travelListFactory.gets(strCate1)
	.then(function (response) {
    	$scope.travelList = response.data.records;
    })
    .finally(function (){
    	loadingService.hide();
    });

    $scope.list_more = function(){
		var cnt = $scope.travelList.length;

		loadingService.show();
		travelListFactory.more(strCate1, cnt)
		.then(function (response) {
	    	var data = response.data.records;
	    	var length = data.length;
	    	if(length>0){	
	    		$scope.travelList = $scope.travelList.concat(data);
	    	} else {
	    		alert('불러올 데이터가 없습니다.');
	    	} 
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });

	};


    
})

.controller('travelViewCtrl', function($scope, $stateParams, $state, $location, $http, bbsUrlFactory, commentListFactory, loadingService, Architimes_app_url){
	var intId = $stateParams.intId; 
	
	if(!intId){
		alert('해당자료가 없습니다.')
		$state.transitionTo('news');
	}

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	console.log('게시판번호 '+strCate1)
	loadingService.show();
	bbsViewFactory.get(strCate1, intId)
    .then(function (response) {
    	$scope.newsView = response.data.records; 	    
    });


    commentListFactory.gets(intId)
	.then(function (response) {
    	$scope.commentList = response.data.records; 	
    })
    .finally(function (){
    	loadingService.hide();
    });
    
    $scope.clist_more = function(){
		var cnt = $scope.commentList.length;

		loadingService.show();
		commentListFactory.more(intId, cnt)
		.then(function (response) {
	    	var data = response.data.records;
	    	var length = data.length;
	    	if(length>0){	
	    		$scope.commentList = $scope.commentList.concat(data);
	    	} else {
	    		alert('불러올 데이터가 없습니다.');
	    	}  	
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });
	};

	

}).filter("trust", ['$sce', function($sce) {
	return function(htmlCode){
		return $sce.trustAsHtml(htmlCode);
	}
}])