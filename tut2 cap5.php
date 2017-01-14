<!DOCTYPE html>
<html  ng-app="MyFirstApp">
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap5.js"></script>
</head>
<body ng-controller="FirstController"><!---controller define el controlador-->

<input type="text" ng-model="nombre">

{{"nombre: "+nombre}}

</body>
</html>
