'use strict';


angular.module('starter')

.controller('portfolioListCtrl', function($scope, $http, $location, portfolioListFactory, bbsUrlFactory, loadingService, Architimes_app_url){

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	var url_split = url.split( '/' );
	$scope.view_route = url_split[1]+"-portfolio";

	loadingService.show();
    portfolioListFactory.gets(strCate1)
	.then(function (response) {
    	$scope.list = response.data.records;
    	console.log($scope.list)
    })
    .finally(function (){
    	loadingService.hide();
    });

    $scope.list_more = function(){
		var cnt = $scope.list.length;

		loadingService.show();
		portfolioListFactory.more(strCate1, cnt)
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


    
})

.controller('portfolioViewCtrl', function($scope, $stateParams, $state, $location, $http, portfolioListFactory, bbsUrlFactory, bbsViewFactory, commentListFactory, loadingService, Architimes_app_url){
	var intId = $stateParams.intId; 
	
	if(!intId){
		alert('해당자료가 없습니다.')
		$state.transitionTo('co');
	}

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	var url_split = url.split( '/' );
	$scope.tv_url = url_split[1];
	
	console.log('게시판번호 '+ intId + "  " +strCate1)

	loadingService.show();
	bbsViewFactory.get(strCate1, intId)
    .then(function (response) {
    	$scope.newsView = response.data.records; 	

    	var strWirter = $scope.newsView.strWriter;

    	portfolioListFactory.other(strCate1, strWirter)
		.then(function (response) {
	    	$scope.otherlist = response.data.records;
	    	console.log($scope.otherlist );
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });
    })


    commentListFactory.gets(intId)
	.then(function (response) {
    	$scope.commentList = response.data.records; 	
    })
    
    
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