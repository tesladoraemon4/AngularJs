angular.module("MyFirstApp",[])

.controller("firstController",function ($scope) {


	/*
	watcher escucha los eventos de cada elemento 
	$digest actualiza los atributos de los elementos yt revisa si hay 
	cambios en cada elemento 
	*/

	$scope.nombre ="david";
	setTimeout(function () {
		$scope.$apply(function () {
			
			$scope.nombre ="sublime";
			//$scope.$digest();
		});


		//$scope.$digest(); actualiza la vista		
	},2000);


});















