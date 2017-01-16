window.angular.module("cosasHacer",["LocalStorageModule"])
.service("toDoService",function (localStorageService/*servicios a usar*/) {
	/*sirve para hacer servicios */

	/*
	DIFERENCIA ENTRE FACTORY Y SERVICE ES QUE SERVICE SE EJECUTA COMO 
	UN CONSTRUCTOR Y RETORNA UN OBJETO 

	EL FACTORY NO RETORNA UNA OBJETO SOLO EJECUTA UNA FUNCIOIN
	*/

	//var toDoService = {}; NO ES NECESARIO EL OBJETO


	this.key = "angular";

	if(localStorageService.get("angular"))
		this.activiti = localStorageService.get(this.key);
	
	else
		this.activiti =[];



	this.add= function (newActv) {
		this.activiti.push(newActv);
		this.updateLocalStorange();
	}




	this.updateLocalStorange= function () {
		localStorageService.set(this.key,this.activiti);

	}
	this.limpiar = function () {
		this.activiti = [];
		this.updateLocalStorange();
	}



	this.getAll = function () {
		return this.activiti;
	}

	this.removeItem = function (item) {
		this.activiti = this.activiti.filter(function (itemPosx) {
			return itemPosx !== item;
			//false elimina el elemento true conserva el elementop
		});

		this.updateLocalStorange();
		return this.getAll();
	}



	return toDoService;
})
.controller("hacerControlador",function ($scope,localStorageService,toDoService) {

	$scope.todas = toDoService.getAll();

	$scope.newActv={};
	$scope.addActv=function () {
		toDoService.add($scope.newActv);
		$scope.newActv={};
	};


	
	$scope.removeActv=function (item) {
		$scope.todas = toDoService.removeItem(item);
	};


	$scope.clean=function () {
		toDoService.limpiar();
	};



});