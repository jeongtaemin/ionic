angular.module('starter.services', [])


.factory('Posts', function(){
	
	var posts = [
		{
			id:0, name:'진돗개', title:'제목1', text:'안녕1'
		},
		{
			id:1, name:'말말말', title:'제목2', text:'안녕2'
		},
		{
			id:2, name:'고양이', title:'제목3', text:'안녕3'
		}
		
	];


	return {
		all: function(){
			return posts;
		},
		get: function(postId){
			return posts[postId];
		}
	};

});