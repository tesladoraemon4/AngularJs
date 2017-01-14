var app = angular.module("MyFirstApp",[]);//NOmbre del modulo, 
//modulos a importar 
//retorna una referencia a la funcion 
app.controller("FirstController",function ($scope) {
//el objeto scope enlaza la informacion del driver con la vista 
	$scope.nombre="david";
});






/*  otra forma 

	angular.module("MyFirstApp",["ngResourse",""])
	.controller("FirstController",function ($scope) {
	//el objeto scope enlaza la informacion del driver con la vista 
		$scope.nombre="david";
	}).controller("TridController",function ($scope) {
	//el objeto scope enlaza la informacion del driver con la vista 
		$scope.nombre="david";
	});

*/









