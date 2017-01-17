<!DOCTYPE html>
<html  ng-app="CustomDirective">
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap18.js"></script>
</head>
<body ng-controller="AppCtrl"><!---controller define el controlador-->
     <ul class="no-list" ng-cloak><!--ver una plantilla antes de que cargue -->
               <li ng-repeat="repo in repos">
                    <img ng-src="{{respo.owner.avatar_url}}">
                    <h3>{{repo.name}}</h3>
               </li>
          </ul>



</body>
</html>
