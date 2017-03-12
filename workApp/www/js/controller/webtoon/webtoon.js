'use strict';


angular.module('starter')

.controller('webtoonCtrl', function($scope, $stateParams, $window, $http, $location, $state, bbsUrlFactory, companyListFactory,  loadingService, $localstorage, Architimes_app_url){
	$scope.isActive = false;
	$scope.activeButton = function() {
	    if($scope.isActive == false){
	    	$scope.isActive = true;
	    } else {
	    	alert("더이상 불러올 자료가 없습니다.")
	    }
	}  
})

.controller('webtoonViewCtrl', function($scope, $stateParams, $window, $http, $location, $state, bbsUrlFactory, companyListFactory,  loadingService, $localstorage, Architimes_app_url){
	var intId = $stateParams.intId; 
	var _imgNo = Array('0','11','12','21','22','23','31','41','42','43','51','52','61','71','72','81','82');

	if(!intId){
		alert('해당자료가 없습니다.')
		$state.transitionTo('webtoon');
	}

	if(intId == "0") {
		$scope.file_name = '00';
	} else {
		$scope.file_name = intId;
	}

	$scope.current_num = parseInt(intId, 10)

	for(var i=0; i<_imgNo.length; i++) {
		$scope.num_str = parseInt(_imgNo[i], 10)
		if($scope.current_num ==  $scope.num_str){
			var before = i-1;
			var after = i+1;
			if(_imgNo[before]){
				$scope.before_num = parseInt(_imgNo[before], 10)
			} else {
				$scope.before_num = 99
			}
			if(_imgNo[after]){
				$scope.after_num = parseInt(_imgNo[after], 10)
			}  else {
				$scope.after_num = 99
			}
			console.log($scope.before_num, $scope.current_num, $scope.after_num)
		}
		
	}


})
