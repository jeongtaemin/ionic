'use strict';


angular.module('starter')


.factory('companyListFactory', function($http, Architimes_app_url){
	var obj = {};


	obj.more = function() {
		return $http.get(Architimes_app_url+"/webtoon_list.php");	    
	};

	return obj;
	
})
