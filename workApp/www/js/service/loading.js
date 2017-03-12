'use strict';


angular.module('starter')

.service('loadingService', function($ionicLoading){
	return {
		show: function() {
			$ionicLoading.show({
			  template: 'Loading...',
			  duration: 3000
			}).then(function(){
			   console.log("The loading indicator is now displayed");
			});
		},
		hide: function(){
			$ionicLoading.hide().then(function(){
			   console.log("The loading indicator is now hidden");
			});
		}
	}


})