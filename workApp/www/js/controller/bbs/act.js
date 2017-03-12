'use strict';


angular.module('starter')

.controller('bbsActCtrl', function($scope, $stateParams, $state, $cordovaSocialSharing, bbsUrlFactory, bbsViewFactory, modalService, loadingService, $localstorage, $location, $window, $http, Architimes_app_url){
	var intId = $stateParams.intId; 
	var authData = $localstorage.getObject("authData");
	var strId = ''; 

    $scope.loginData = authData;
    if($scope.loginData){
    	strId = $scope.loginData.m_strId; 
    }

	console.log(intId + "번 글")
	if(!intId){
		alert('해당자료가 없습니다.')
		$window.history.back();
	}
	
    $scope.bbs_like = function(){
    	loadingService.show();
    	$http.get(Architimes_app_url+"/comment_proc.php?cType=chu&intId="+intId+"&strId="+strId)
	    .then(function (response) {
	    	loadingService.hide();
	    	$scope.likeResult = response.data.records; 	
	    	alert($scope.likeResult);
	    });
    	
	};

	$scope.bbs_comment = function(){
		$state.go('comment', {intId:intId, strId:strId}, {reload:false});
	};

	$scope.bbs_scrap = function(){
		loadingService.show();
		$http.get(Architimes_app_url+"/comment_proc.php?cType=scrap&intId="+intId+"&strId="+strId)
	    .then(function (response) {
	    	loadingService.hide();
	    	$scope.scrapResult = response.data.records; 	
	    	alert($scope.scrapResult);
	    });
	};

	$scope.bbs_share_open = function(){
		modalService.openModal('templates/modal/share.html');
	};

	$scope.bbs_share_close = function(){
		modalService.closeModal();
	};


	var strTitle = '';
	var strURL = '';
	var strMsg = '';
	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)

	bbsViewFactory.get(strCate1, intId)
	.then(function (response) {
    	strTitle = response.data.records.strTitle;
    	strURL = response.data.records.strViewUrl;
    	strMsg = strTitle + " " + strURL;
    	console.log(strMsg)
    	
    });

	$scope.shareAnywhere = function(){
		window.plugins.socialsharing.share(strTitle, null, null /* image */, strURL);
	};


	$scope.shareTwitter = function() {
 		window.plugins.socialsharing.shareViaTwitter(
	        strTitle, 
	        null /* image */, 
	        strURL, null, 
	        function(errormsg){alert("Error: Cannot Share")}
	      );
    }

    $scope.shareFacebook = function() {
        window.plugins.socialsharing.shareViaFacebook(
	     strTitle, 
	      null /* image */, 
	      strURL,
	       null, 
	       function(errormsg){alert("Error: Cannot Share")});
    }



})


.controller('commentActCtrl', function($scope, $stateParams, $state, $cordovaSocialSharing, loadingService, $localstorage, $location, $window, $http, Architimes_app_url){
	var intId = $stateParams.intId; 
	var strId = $stateParams.strId; 

	var authData = $localstorage.getObject("authData");
    $scope.loginData = authData;
    var m_strId = ""; 

    if($scope.loginData){
    	m_strId = $scope.loginData.m_strId; 
    }


	console.log(intId + " , " + strId + " , "  + m_strId +" 댓글컨트롤러")
	if(!intId){
		alert('해당자료가 없습니다.')
		$window.history.back();
	}
	
	$http.get(Architimes_app_url+"/bbs_comment_list.php?intId="+intId+"&list=all")
    .then(function (response) {
    	$scope.commentList = response.data.records; 	
    	console.log($scope.commentList)
    });

    $scope.addComment = function(){
    	if(!$scope.content){
    		alert('댓글을 입력해주세요.')
    		$('#content').focus()
    		return;
    	}

    	loadingService.show();
    	$http.post(Architimes_app_url+"/comment_proc.php?cType=write&intId="+intId+"&strId="+strId, {
            strContent: $scope.content
    	}).then(function (response) {
	    	$scope.result = response.data.records; 	
	    	alert($scope.result)
	    	loadingService.hide()
	    	$window.location.reload();
	    });
    }

    $scope.delComment = function(param){
    	var intId = param;

    	if(!intId){
    		alert('해당 자료가 없습니다.')
    		return;
    	}

    	loadingService.show();
    	$http.get(Architimes_app_url+"/comment_proc.php?cType=delete&intId="+intId+"&strId="+m_strId)
    	.then(function (response) {
	    	$scope.result = response.data.records; 	
	    	alert($scope.result)
	    	loadingService.hide()
	    	$window.location.reload();
	    });
    }
    


})