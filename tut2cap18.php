<!DOCTYPE html>
<html  ng-app="CustomDirective">
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap18.js"></script>
     <style type="text/css">
     	.circular{
     		border-radius: 50%;
     		width: 100px;
     		height: 100px;
     		display: inline-block;
     	}

     </style>


</head>
<body ng-controller="AppCtrl"><!---controller define el controlador-->
     <ul class="no-list" ng-cloak><!--ver una plantilla antes de que cargue -->
               <li ng-repeat="repo in repos">
                    <h3>{{repo.name}}</h3>
                    <div class="circular" 
                    img-circle ="{{repo.owner.avatar_url}}"
                    >
                    	
                    </div>


               </li>
          </ul>



</body>
</html>
<!--
	style="
	background:url({{repo.owner.avatar_url}});
	background-position: center;
	background-size: cover; 
	"
-->