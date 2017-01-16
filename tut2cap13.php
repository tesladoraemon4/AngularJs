<!DOCTYPE html>
<html  ng-app="MyFirstApp">
<head>
	<title>PRimera pagina con angular</title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap13.js"></script> 
     </head>
	<body><!---controller define el controlador-->

	<div  ng-controller="FirstController">
		<h1>primero</h1>

		{{nombre}}

		<h2>Hijo primero</h2>

		<div ng-controller="childController">
			{{$parent.nombre}}
		</div>

	</div>


	<div  ng-controller="SecondController">
		<h1>Segundo</h1>
		{{nombre}}<br>
		{{$parent.nombre}}<!--Acedemos a las propiedades del padre-->


	</div>


	</body>
</html>
