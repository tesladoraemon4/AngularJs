angular.module("CustomDirective",["ngRoute"])
.config(function ($routeProvider) {
	//gestiona las rutas 
	//ruta {json}
	$routeProvider.when("/",{
		controller:"select",//asigna el controller 
		templateUrl : "templates/plantilla1.html"//copia y pega el contenido de home.html en 
		//el div con ng-show 
	}).when("/repo/:name",{
		controller:"RepoController",//asigna el controller 
		templateUrl : "templates/repo.html"//copia y pega el contenido de home.html en 
		//el div con ng-show 			
	}).otherwise("/");//si no introduce una direccion existente 
	//los manda a cualquier otra direccion
});

