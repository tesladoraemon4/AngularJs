angular.module("CustomDirective",[])
.directive("myAutocomplete",function () {
	// se  va a comunicar jquery con angular y se hace la manupulacion del doom
	function link(scope,element,attrs) {

		//como se importo jquery es posible usarlo en el proyecto
		//$(obj jquery).metodo({JSON})
		$(element).autocomplete({
			source:scope.$eval(attrs.myAutocomplete/*saco repost del controller*/),
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
		link : link//link: nompuncion
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




});
