angular.module("MyFirstApp",[])
.controller("FirstController",function ($scope,$http) {
	$scope.loading=true;
	$scope.posts =[];
	//.get peticion asincronica return promise
 	$http.get("https://jsonplaceholder.typicode.com/posts").
 		success(function (data) {//cuando la peticion es exitosa
 			$scope.posts = data;
 			$scope.loading=true;



 		}).error(function(error){//cuando hay error 
 			console.log("Error ");
 			$scope.loading=false;

 		});



});