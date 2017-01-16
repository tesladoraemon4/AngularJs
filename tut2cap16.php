<!DOCTYPE html>
<html  ng-app>
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controller16.js"></script>
     <style >
     	.hover{
     		background-color:red; 
     	}
     	.no-hover{
     		background-color:blue;
     	}
     </style>


</head>
<body ><!---controller define el controlador-->

<button class="hover" ng-class ="{'hover': bandera, 'no-hover':!bandera}" ng-click="bandera= !bandera">
	evento	
</button>


<span ng-show="bandera">click me</span>

<br>
{{bandera | json}}

<br>


</body>
</html>
