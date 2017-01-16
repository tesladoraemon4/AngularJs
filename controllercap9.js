window.angular.module("cosasHacer",["LocalStorageModule"])
.controller("hacerControlador",function ($scope,localStorageService) {

	if(localStorageService.get("angular")){
		$scope.todas = localStorageService.get("angular");
	}
	else{
		$scope.todas=[];
	}
	//nombre coleccion , funcion
	$scope.$watchCollection ("todas",function (newValue, oldValue) {

		localStorageService.set("angular",$scope.todas);
	});



	/*
	//es un watch para una sola variable
	$scope.$watch(function () {
		return $scope.newActv;//valor a observar
	},function (newValue, oldValue) {//escucha el viejo valo y el nuevo
		console.log("viejo"+oldValue);
		console.log("nuevo "+newValue);
	});

	*/


	$scope.limpiar = function () {
		$scope.todas = [];
	}


	$scope.addActv= function () {
		$scope.todas.push($scope.newActv);
		$scope.newActv={};
	}





});