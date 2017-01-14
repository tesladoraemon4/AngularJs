<!DOCTYPE html>
<html  ng-app="MyFirstApp">
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap5.js"></script>
</head>
<body ng-controller="FirstController"><!---controller define el controlador-->


<input type="text" ng-model="nuevoComentario.comentario">

<input type="text" ng-model="nuevoComentario.username">

<button ng-click="agregarComentario()">agregar comentario</button>






<h3>COmentarios</h3>

<ul>
	<li ng-repeat= "comentario in comentarios">
		{{comentario.comentario}}

		<strong>{{comentario.username}}</strong>
	</li>
</ul>





<h1>Ejemplo inicial</h1>



<input type="text" ng-model="nombre">

{{"nombre: "+nombre}}

<br>


</body>
</html>
