<!DOCTYPE html>
<html  ng-app="cosasHacer">
<head>
	<title>PRimera pagina con angular</title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap9.js"></script>
     <script type="text/javascript" src="angular-local-storage.min.js"></script>
</head>
	<body ng-controller="hacerControlador"><!---controller define el controlador-->



	<ul>
		<li ng-repeat="actividadx in todas">
			{{actividadx.actividad}} - {{actividadx.fecha}}	
		</li>
	</ul>




	<form ng-submit="addActv()">
		<input type="text" name="actividad" ng-model="newActv.actividad">
		<input type="text" name="fecha" ng-model="newActv.fecha">

		<input type="submit" value="Enviar">
	</form>

	<button ng-click="limpiar()">limpiar</button>
	</body>
</html>
