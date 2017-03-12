'use strict';


angular.module('starter')

.service('modalService', function($ionicModal){
	return {	

		openModal : function(url) {	
				
			$ionicModal.fromTemplateUrl(url, {
				animation: 'slide-in-up'
			}).then(function(modal) {
				$ionicModal.modal = modal;
				$ionicModal.modal.show();
			});
			
		},

		closeModal : function() {
			$ionicModal.modal.hide();
			$ionicModal.modal.remove();
		}
	}


})