angular.module("CustomDirective",[])
.directive("imgCircle",function () {
	return function (scope,elem,atrib) {
		atrib.$observe("imgCircle",function (paramDirective) {


			//elem.atributo({JSON})
elem.css({"background":"url("+paramDirective+")",
	"background-position": "center",
	"background-size": "cover"});

		});


	}
})
.controller("AppCtrl",function ($scope,$http) {

	$http.get("https://api.github.com/users/codigofacilito/repos").
	success(function (data) {
		$scope.repos = data;



	}).error(function (error) {
		console.log(error)
		// body...
	});


});
