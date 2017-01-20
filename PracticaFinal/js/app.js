angular./**
* FinalApp Module
*
* Description
	Final de la aplicacion
	ngResource sirve para hacer consultas a una api rest
*/	
module('FinalApp', ["lumx","ngRoute","ngResource"])
.config(function ($routeProvider) {
	$routeProvider
		.when("/",{
			controller:"MainController",
			templateUrl:"templates/home.html"
		});



});