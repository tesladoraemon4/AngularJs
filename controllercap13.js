angular.module("MyFirstApp",[])
.controller("FirstController",function ($scope,$rootScope) {
	/*
		hay dos formas de hacerlo 
		.run(function($rootScope){
				
		})

	
	*/
	$rootScope.nombre = "david";


})
.controller("SecondController",function ($scope,$rootScope) {
	$scope.nombre="miguel";//sobre escribimos el atributo


}).controller("childController",function ($scope,$rootScope) {



});