'use strict';



angular.module('starter')

.controller('mainCtrl', function($scope, $http, loadingService, Architimes_app_url){
    var loading1 = false;
    var loading2 = false;
    var loading3 = false;
    var loading4 = false;
    var loading5 = false;

    loadingService.show();
    $http.get(Architimes_app_url+"/main_news_list.php")
    .then(function (response) {
        $scope.news = response.data.records;
        loading1 = true;
    });
    $http.get(Architimes_app_url+"/main_co_list.php")
    .then(function (response) {
        $scope.coPort = response.data.records;
        loading2 = true;
    });
    $http.get(Architimes_app_url+"/main_portfolio_list.php")
    .then(function (response) {
        $scope.Portfolio = response.data.records;
        loading3 = true;
    });
    $http.get(Architimes_app_url+"/main_material_list.php")
    .then(function (response) {
        $scope.Material = response.data.records;
        loading4 = true;
    });
    $http.get(Architimes_app_url+"/main_travel_list.php")
    .then(function (response) {
        $scope.Travel = response.data.records;
        loading5 = true;
    });
    if(loading1 && loading2 && loading3 && loading4 && loading5 ){
        loadingService.hide();
    }
    
})
.controller('newsCtrl', function($scope, $http, loadingService, Architimes_app_url){
	$http.get(Architimes_app_url+"/main_news_list.php")
    .then(function (response) {
    	$scope.news = response.data.records;
    });
})
.controller('coPortfolioCtrl', function($scope, $http, loadingService, Architimes_app_url){
	$http.get(Architimes_app_url+"/main_co_list.php")
    .then(function (response) {
    	$scope.coPort = response.data.records;
    });


})
.controller('portfolioCtrl', function($scope, $http, loadingService, Architimes_app_url){
	$http.get(Architimes_app_url+"/main_portfolio_list.php")
    .then(function (response) {
    	$scope.Portfolio = response.data.records;
    });
})
.controller('materialCtrl', function($scope, $http, loadingService, Architimes_app_url){
	$http.get(Architimes_app_url+"/main_material_list.php")
    .then(function (response) {
    	$scope.Material = response.data.records;
        loadingService.hide();
    });
})
.controller('travelCtrl', function($scope, $http, loadingService, Architimes_app_url){
    // loadingService.show();
	$http.get(Architimes_app_url+"/main_travel_list.php")
    .then(function (response) {
    	$scope.Travel = response.data.records;
    });
})
