'use strict';

angular.module('starter')

.controller('activeCtrl', function($scope, $location){
    $scope.isActive = function (viewLocation) { 

    	var url = $location.path();
    	var url_split = url.split( '/' );

    	if(url === "/" && viewLocation === url){
    		return true;
    	} else if(url === "/law" && viewLocation === "news"){
    		return true;
    	} else if (url_split[1] === viewLocation){
    		return true;
    	} else {
    		return false;
    	}

 
    };
})