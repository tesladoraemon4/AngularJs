<!DOCTYPE html>
<html  ng-app="MyFirstApp">
<head>
	<title>PRimera pagina con angular</title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap12.js"></script> 
     <style>
     	.animated{
     		opacity: 1;
     		max-height:auto;
     		overflow: hidden; 
     		-webkit-transition: all 2s;
     		transition-delay:3s; 
     	}
     	.animated.ng-hide{
     		opacity: 0;
     		max-height:0px !important;
     		display: block !important;
     	}
     </style>
</head>
	<body ng-controller="FirstController"><!---controller define el controlador-->

	<div ng-show="posts.length <= 0 && loading" >
		cargando....
	</div>

	<div ng-show="!loading" >
		error al cargar la pagina
	</div>


	

	<div class="animated" ng-repeat="post in posts" ng-hide="posts.length < 0">
		<h3>
			{{post.title}}
		</h3>
		<h6>
			{{post.body}}
		</h6>
	</div>

	</body>
</html>
