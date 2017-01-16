angular.module("MyFirstApp",[])
.filter("removeHTML",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,"");
	}
})
.controller("filterController",function ($scope) {
//el objeto scope enlaza la informacion del driver con la vista 

	$scope.mi_html ="<h1>hola</h1>"






});















