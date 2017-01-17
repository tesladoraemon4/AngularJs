angular.module("CustomDirective",[])
.directive("myAutocomplete",function () {
	// se  va a comunicar jquery con angular
	function link(scope,elem,atrib) {

		//como se importo jquery es posible usarlo en el proyecto
		//$(obj jquery).metodo({JSON})
		$(elem).autocomplete({
			source:scope.$eval(atrib.myAutocomplete/*saco repost del controller*/),
			select:function (ev,ui) {//cuando seleccionamos algun elemento de la lista
				ev.preventDefault();
				if(ui.item){
					//opcion del auto completado
					scope.optionSelected(ui.item.value);
				}

			},
			focus:function (ev,ui) {
				ev.preventDefault();
				$(this).val(ui.item.label);

			}
		});
	}


	return {
		link : link
	};

})
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




});
