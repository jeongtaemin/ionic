'use strict';


angular.module('starter')


.factory('companyListFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(strCate1) {
		return $http.get(Architimes_app_url+"/company_list.php?strCate1="+strCate1);	    
	};

	obj.search_gets = function(strCate1, search) {
		console.log(Architimes_app_url+"/company_list.php?strCate1="+strCate1+"&strCompanyName="+search)
		return $http.get(Architimes_app_url+"/company_list.php?strCate1="+strCate1+"&strCompanyName="+search);	    
	}; 

	obj.search_area_gets = function(strCate1, search) {
		return $http.get(Architimes_app_url+"/company_list.php?strCate1="+strCate1+"&strCompanyAddress="+search);	    
	};

	obj.more = function(strCate1, cnt, strCompanyName, strCompanyAddress) {
		return $http.get(Architimes_app_url+"/company_list.php?strCate1="+strCate1+"&cnt="+cnt+"&strCompanyName="+strCompanyName+"&strCompanyAddress="+strCompanyAddress);	    
	};

	return obj;
	
})


.factory('gpsCompanyFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(strCate1, latitude, longitude) {
		console.log(Architimes_app_url+"/company_gps_list.php?strCate1="+strCate1+"&latitude="+latitude+"&longitude="+longitude)
		return $http.get(Architimes_app_url+"/company_gps_list.php?strCate1="+strCate1+"&latitude="+latitude+"&longitude="+longitude);	    
	};

	obj.search_gets = function(strCate1, latitude, longitude, search) {
		console.log(Architimes_app_url+"/company_gps_list.php?strCate1="+strCate1+"&strCompanyName="+search+"&latitude="+latitude+"&longitude="+longitude)
		return $http.get(Architimes_app_url+"/company_gps_list.php?strCate1="+strCate1+"&strCompanyName="+search+"&latitude="+latitude+"&longitude="+longitude);	    
	}; 

	obj.more = function(strCate1, cnt, latitude, longitude) {
		return $http.get(Architimes_app_url+"/company_gps_list.php?strCate1="+strCate1+"&cnt="+cnt+"&latitude="+latitude+"&longitude="+longitude);	    
	};

	return obj;
	
})