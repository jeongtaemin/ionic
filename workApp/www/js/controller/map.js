'use strict';


angular.module('starter')

.controller('MapCtrl', function($scope, $stateParams,  $cordovaGeolocation, $window, $http, $location, $state, bbsUrlFactory, gpsCompanyFactory, companyListFactory, loadingService, Architimes_app_url){

	var options = {timeout: 10000, enableHighAccuracy: true};

	var url = $location.path();
	var strCate1 = bbsUrlFactory.get(url)
	console.log("strCate1 " + strCate1)

	var latitude = '';
	var longitude = '';
	var markers = [];
 
	$cordovaGeolocation.getCurrentPosition(options)
	.then(function(position){

		// var latLng = new google.maps.LatLng(35.1762416, 129.1260502);
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var mapOptions = {
		  center: latLng,
		  zoom: 15,
		  mapTypeControl: false,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);	

		google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 		  var marker_image = './img/sub/marker.png';
 		  var my_image = './img/sub/my_marker.png';
		  var marker = new google.maps.Marker({
		      map: $scope.map,
		      animation: google.maps.Animation.DROP,
		      position: latLng,
		      icon: my_image
		  });      
		  var infoWindow = new google.maps.InfoWindow({
		      content: "내위치",
		  });
	 
		  google.maps.event.addListener(marker, 'click', function () {
		      infoWindow.open($scope.map, marker);
		  });

		  latitude = position.coords.latitude;
		  longitude = position.coords.longitude;

		  gpsCompanyFactory.gets(strCate1, latitude, longitude)
			.then(function (response) {
				loadingService.show();
		    	var data = response.data.records;
		    	$scope.gps_list = response.data.records;
		    	$scope.setMarkers($scope.map, $scope.gps_list);
		    })
		    .finally(function (){
		    	loadingService.hide();
		    });

		});

	}, function(error){
		alert("현재 정보를 불러올 수 없습니다.");
	});

	$scope.setMarkers = function(map, info) {
		var marker_image = './img/sub/marker.png';
		$.each(info, function(index){
			var position = new google.maps.LatLng(info[index].lat, info[index].lng);
			var marker = new google.maps.Marker({
				position: position,
				map: map,
				icon: marker_image,
				title: info[index].food_title,
				customInfo : index
			});
			var infowindow = new google.maps.InfoWindow({
				content: info[index].strCompanyName
			});
			marker.addListener('click', function(e) {
				infowindow.open(map, marker);
				map.setCenter(marker.getPosition());
			});
			markers.push(marker);

		});
	}


	$scope.list_more = function(){
		var cnt = $scope.gps_list.length;

		loadingService.show();
		gpsCompanyFactory.more(strCate1, cnt, latitude, longitude)
		.then(function (response) {
	    	var data = response.data.records;
	    	var length = data.length;
	    	if(length>0){	
	    		$scope.gps_list = $scope.gps_list.concat(data);
	    		$scope.setMarkers($scope.map, $scope.gps_list);
	    	} else {
	    		alert('불러올 데이터가 없습니다.');
	    	} 
	    })
	    .finally(function (){
	    	loadingService.hide();
	    });
	};
	
	$scope.map_search_company = function(){
    	var search = $scope.search_map;
    	if(!search){
    		alert("시공사를 입력해주세요.")
    		return;
    	} else {

	    	loadingService.show();
		    gpsCompanyFactory.search_gets(strCate1, latitude, longitude, search)
			.then(function (response) {
				loadingService.show();
		    	var data = response.data.records;
		    	$scope.gps_list = response.data.records;
		    	$scope.setMarkers($scope.map, $scope.gps_list);
		    })
		    .finally(function (){
		    	loadingService.hide();
		    });
		}

	};


	$scope.view_map = function(strCode){
		console.log(strCode + "번 글");
	};

})
