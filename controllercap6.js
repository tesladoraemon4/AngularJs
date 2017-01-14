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
	s.nuevoComentario = {};

	s.nombre="david";

	s.comentarios = [
		{
			comentario:"Comentarios c",
			username:"David"
		},
		{
			comentario:"Comentarios x",
			username:"David 12343"
		}

	];


	s.agregarComentario = function () {
		s.comentarios.push(s.nuevoComentario);
		s.nuevoComentario ={};
	}

}])







/*  otra forma 

	angular.module("MyFirstApp",["ngResourse",""])
	.controller("FirstController",function (s) {
	//el objeto scope enlaza la informacion del driver con la vista 
		s.nombre="david";
	}).controller("TridController",function (s) {
	//el objeto scope enlaza la informacion del driver con la vista 
		s.nombre="david";
	});

*/









