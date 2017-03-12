'use strict';


angular.module('starter')

.controller('bbsListCtrl', function($scope, $http, $location, bbsListFactory, bbsUrlFactory, loadingService, Architimes_app_url){

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	console.log(strCate1 + " 리스트")

	loadingService.show();
    bbsListFactory.gets(strCate1)
	.then(function (response) {
    	$scope.newsList = response.data.records; 	
    })
    .finally(function (){
    	loadingService.hide();
    });


    $scope.list_more = function(){
		var cnt = $scope.newsList.length;

		loadingService.show();
		bbsListFactory.more(strCate1, cnt)
		.then(function (response) {
	    	var data = response.data.records;
	    	var length = data.length;
	    	if(length>0){	
	    		$scope.newsList = $scope.newsList.concat(data);
	    	} else {
	    		alert('불러올 데이터가 없습니다.');
	    	} 
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });

	};
})

.controller('bbsViewCtrl', function($scope, $stateParams, $state, $location, $http, bbsUrlFactory, bbsViewFactory, commentListFactory, travelListFactory, loadingService, Architimes_app_url){
	var intId = $stateParams.intId; 
	
	if(!intId){
		alert('해당자료가 없습니다.')
		$state.transitionTo('news');
	}

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	var url_split = url.split( '/' );
	$scope.tv_url = url_split[1];

	switch(url_split[1]) {
	    case 'ando':
	        $scope.tv_title = '안도다다오';
	        break;
	    case 'newyork':
	        $scope.tv_title = '뉴욕';
	        break;
	    case 'chicago':
	        $scope.tv_title = '시카고';
	        break;
	    case 'toronto':
	        $scope.tv_title = '토론토';
	        break;
	    case 'barca':
	        $scope.tv_title = '바르셀로나';
	        break;
	}


	loadingService.show();
	bbsViewFactory.get(strCate1, intId)
    .then(function (response) {
    	$scope.newsView = response.data.records; 	    
    })
    .finally(function (){
    	loadingService.hide();
    });


    commentListFactory.gets(intId)
	.then(function (response) {
    	$scope.commentList = response.data.records; 	
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


	travelListFactory.gets(strCate1)
	.then(function (response) {
    	$scope.travelList = response.data.records; 	
    })

	

}).filter("trust", ['$sce', function($sce) {
	return function(htmlCode){
		return $sce.trustAsHtml(htmlCode);
	}
}])