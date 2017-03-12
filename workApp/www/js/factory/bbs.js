'use strict';


angular.module('starter')

.factory('bbsUrlFactory', function(){

	var obj = {}

	obj.get = function(url) {
		var url_split = url.split( '/' );

		var strCate1 = '';
		switch(url_split[1]) {
		    case 'news':
		        strCate1 = 'bbs02';
		        break;
		    case 'law':
		        strCate1 = 'bbs08';
		        break;
		    case 'ando':
		        strCate1 = 'bbs31';
		        break;
		    case 'newyork':
		        strCate1 = 'bbs32';
		        break;
		    case 'chicago':
		       	strCate1 = 'bbs33';
		        break;
		    case 'toronto':
		        strCate1 = 'bbs34';
		        break;
		    case 'barca':
		        strCate1 = 'bbs35';
		        break;
		    case 'co':
		       	strCate1 = 'company';
		        break;
		    case 'ar':
		        strCate1 = 'portfolio';
		        break;
		    case 'ma':
		        strCate1 = 'materials';
		        break;

		    default:
		        strCate1 = 'bbs02';
		}

		return strCate1;	      
	};

	return obj;
})


.factory('bbsListFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(strCate1) {
		return $http.get(Architimes_app_url+"/bbs_list.php?strCate1="+strCate1);	    
	};

	obj.more = function(strCate1, cnt) {
		return $http.get(Architimes_app_url+"/bbs_list.php?strCate1="+strCate1+"&cnt="+cnt);	    
	};

	return obj;
	
})

.factory('bbsViewFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.get = function(strCate1, intId) {
		// console.log(Architimes_app_url+"/bbs_view.php?strCate1="+strCate1+"&intId="+intId)
		return $http.get(Architimes_app_url+"/bbs_view.php?strCate1="+strCate1+"&intId="+intId);	    
	};

	return obj;
	
})

.factory('commentListFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(intId) {
		return $http.get(Architimes_app_url+"/bbs_comment_list.php?intId="+intId);	    
	};

	obj.more = function(intId, cnt) {
		return $http.get(Architimes_app_url+"/bbs_comment_list.php?cnt="+cnt+"&intId="+intId);	    
	};

	return obj;
	
})


.factory('travelListFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(strCate1) {
		return $http.get(Architimes_app_url+"/bbs_travel_list.php?strCate1="+strCate1);	    
	};

	obj.get = function(strCate1, intId) {
		return $http.get(Architimes_app_url+"/bbs_view.php?strCate1="+strCate1+"&intId="+intId);	    
	};

	obj.more = function(strCate1, cnt) {
		return $http.get(Architimes_app_url+"/bbs_travel_list.php?strCate1="+strCate1+"&cnt="+cnt);	    
	};

	return obj;
	
})

.factory('portfolioListFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.gets = function(strCate1) {
		console.log(Architimes_app_url+"/portfolio_list.php?strCate1="+strCate1)
		return $http.get(Architimes_app_url+"/portfolio_list.php?strCate1="+strCate1);	    
	};

	obj.get = function(strCate1, intId) {
		return $http.get(Architimes_app_url+"/portfolio_view.php?strCate1="+strCate1+"&intId="+intId);	    
	};

	obj.more = function(strCate1, cnt) {
		return $http.get(Architimes_app_url+"/portfolio_list.php?strCate1="+strCate1+"&cnt="+cnt);	    
	};

	obj.other = function(strCate1, strWriter) {
		console.log(Architimes_app_url+"/portfolio_list.php?strCate1="+strCate1+"&strWriter="+strWriter)
		return $http.get(Architimes_app_url+"/portfolio_list.php?strCate1="+strCate1+"&strWriter="+strWriter);	    
	};

	return obj;
	
})

.factory('portfolioViewFactory', function($http, Architimes_app_url){
	var obj = {};

	obj.get = function(strCate1, intId) {
		return $http.get(Architimes_app_url+"/portfolio_view.php?strCate1="+strCate1+"&intId="+intId);	    
	};

	return obj;
	
})