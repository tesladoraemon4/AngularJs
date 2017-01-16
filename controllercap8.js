angular.module("MyFirstApp",[])
.controller("FirstController",function ($scope,$http) {

	$scope.posts =[];

	$scope.newPost =[];
	//.get peticion asincronica return promise
 	$http.get("https://jsonplaceholder.typicode.com/posts").
 		success(function (data) {//cuando la peticion es exitosa
 			$scope.posts = data;



 		}).error(function(error){//cuando hay error 

 		});



 		$scope.addPost=function(){
 			$http.post("https://jsonplaceholder.typicode.com/posts",
 			{
 				userId: 1,
 				id:1,
 				title: $scope.newPost.title,
 				body: $scope.newPost.body
 			}).
 				success(function (data,status,headers,config) {//cuando la peticion es exitosa
 					$scope.posts.push($scope.newPost);
 					$scope.newPost =[];
 				}).error(function(error,status,headers,config){//cuando hay error 
 					console.log(error);
 				});
 		}



});