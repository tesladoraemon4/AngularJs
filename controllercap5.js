var app = angular.module("MyFirstApp",[]);//NOmbre del modulo, 
//modulos a importar 
//retorna una referencia a la funcion 
app.controller("FirstController",function ($scope) {
//el objeto scope enlaza la informacion del driver con la vista 
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
asdfjklñjsadkflñjasdf

	];


	$scope.agregarComentario = function () {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario ={};
	}


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









