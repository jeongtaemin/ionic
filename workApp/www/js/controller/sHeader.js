'use strict';

angular.module('starter')

.controller('sHeaderCtrl', function($scope, $location, $window){
    var url = $location.path();
    var url_split = url.split( '/' );

    switch(url_split[1]) {
	    case 'news':
	        $scope.title = '건축뉴스';
	        break;
	    case 'law':
	        $scope.title = '건축법';
	        break;
	    case 'travelog':
	        $scope.title = '건축여행기';
	        break;
	    case 'ando':
	        $scope.title = '안도다다오';
	        break;
	    case 'newyork':
	        $scope.title = '뉴욕';
	        break;
	    case 'chicago':
	        $scope.title = '시카고';
	        break;
	    case 'toronto':
	        $scope.title = '토론토';
	        break;
	    case 'barca':
	        $scope.title = '바르셀로나';
	        break;
	    case 'co':
	        $scope.title = '시공';
	        break;
	    case 'po':
	        $scope.title = '설계';
	        break;
	    case 'ma':
	        $scope.title = '자재';
	        break;
	case 'find_id':
		$scope.title = '아이디 찾기';
		break;
	case 'find_pwd':
		$scope.title = '비밀번호 찾기';
		break;
	case 'login':
		$scope.title = '로그인';
		break;
	case 'join':
		$scope.title = '회원가입';
		break;
	case 'event':
		$scope.title = '이벤트';
		break;
	case 'webtoon':
		$scope.title = '웹툰 건축이야기';
		break;
	case 'agreement1':
		$scope.title = '이용약관';
		break;
	case 'agreement2':
		$scope.title = '개인정보보호정책';
		break;
	case 'agreement3':
		$scope.title = '이메일무단수집거부';
		break;

	    default:
	        $scope.title = '아키타임즈';
	}

	$scope.back = function () { 
	         $window.history.back();
	    };
})