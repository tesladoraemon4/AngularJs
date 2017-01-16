window.angular.module("cosasHacer",["LocalStorageModule"])
.factory("toDoService",function (localStorageService/*servicios a usar*/) {
	/*sirve para hacer servicios */

	var toDoService = {};


	toDoService.key = "angular";

	if(localStorageService.get("angular"))
		toDoService.activiti = localStorageService.get(toDoService.key);
	
	else
		toDoService.activiti =[];



	toDoService.add= function (newActv) {
		toDoService.activiti.push(newActv);
		toDoService.updateLocalStorange();
	}




	toDoService.updateLocalStorange= function () {
		localStorageService.set(toDoService.key,toDoService.activiti);

	}
	toDoService.limpiar = function () {
		toDoService.activiti = [];
		toDoService.updateLocalStorange();
	}



	toDoService.getAll = function () {
		return toDoService.activiti;
	}

	toDoService.removeItem = function (item) {
		toDoService.activiti = toDoService.activiti.filter(function (itemPosx) {
			return itemPosx !== item;
			//false elimina el elemento true conserva el elementop
		});

		toDoService.updateLocalStorange();
		return toDoService.getAll();
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