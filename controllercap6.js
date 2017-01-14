var app = angular.module("MyFirstApp",[]);//NOmbre del modulo, 
//modulos a importar 
//retorna una referencia a la funcion 


/*
	*Cambios En la inyeccion de dependencias
	Es cuando cambiamos los nombres de las variables con el fin 
	de hacer mas pequeño el	JS
	app.controller("NOmbre controlador",["cadena del objeto",function(var){
		//codigo
	}]);

*/

app.controller("FirstController",["$scope",function (s) {
	$scope.nuevoComentario = {};

	$scope.nombre="david";

	$scope.comentarios = [
		{
			comentario:"Comentarios c",
			username:"David"
		},
		{
			comentario:"Comentarios x",
			username:"David 12343"
		}

	];


	$scope.agregarComentario = function () {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario ={};
	}

}])







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









