angular.module("CustomDirective")
.controller("ReposController",function ($scope,$http) {
	$scope.repos = [];//variable donde se guardan los nombres de la peticion
	$http.get("https://api.github.com/users/codigofacilito/repos").
	success(function (data) {
		$scope.posts = data;
		for (var i = data.length - 1; i >= 0; i--) {
			var repo = data[i];
			$scope.repos.push(repo.name);
		}


	}).error(function (error) {
		console.log(error)
		// body...
	});





	$scope.optionSelected = function (data) {
		$scope.$apply(function () {
			$scope.main_repo = data;
		});
	}
})
.controller('RepoController', function ($scope,$http,$routeParams) {
	$scope.repo = {};

	console.log($routeParams.name);


	$http.get("https://api.github.com/repos/codigofacilito/"+$routeParams.name).
	success(function (data) {
		$scope.repo = data;
	}).error(function (error) {
		console.log(error)
		// body...
	});




})
.controller('select', ['$scope', function($scope){

	
	$scope.estados = [
		{
			id:1,
			nombre:"CDMX"
		},
		{
			id:3,
			nombre:"jalisco"
		},
		{
			id:2,
			nombre:"Chapas"
		},
		{
			id:6,
			nombre:"estado 6"
		},
		{
			id:9,
			nombre:"estado 9"
		},
		{
			id:8,
			nombre:"estado 8"
		},
	];
}])
.controller('directives', ['$scope', function($scope){
	
	$scope.estados = [
		{
			id:1,
			nombre:"CDMX"
		},
		{
			id:3,
			nombre:"jalisco"
		},
		{
			id:2,
			nombre:"Chapas"
		},
		{
			id:6,
			nombre:"estado 6"
		},
		{
			id:9,
			nombre:"estado 9"
		},
		{
			id:8,
			nombre:"estado 8"
		},
	];
	
}]);