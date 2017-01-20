/**
* FinalApp Module
*
* Description
*/
angular.module('FinalApp')
.controller('MainController',function ($scope,$resource) {
	//hacemos la peticion y el id cambia


	Post = $resource("https://jsonplaceholder.typicode.com/posts:id",{id:"@id"});


	$scope.posts = Post.query();//regresa un arreglo




});