<!DOCTYPE html>
<html  ng-app="MyFirstApp">
<head>
	<title>PRimera pagina con angular</title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap7.js"></script>
</head>
	<body ng-controller="FirstController"><!---controller define el controlador-->

	<div ng-repeat="post in posts">
		<h3>
			{{post.title}}
		</h3>
		<h6>
			{{post.body}}
		</h6>
	</div>



	</body>
</html>
