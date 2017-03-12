angular.module('starter.controllers', ['starter.services'])

.controller('PostsCtrl', function($scope, $log, Posts) {
	$log.log(Posts)
    $scope.posts = Posts.all();
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts) {
  $scope.post = Posts.get($stateParams.postId);
})