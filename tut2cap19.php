<!DOCTYPE html>
<html  ng-app="CustomDirective">
<head>
	<title></title>
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script> 
     <script type="text/javascript" src="controllercap19.js"></script>
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>



     
     <script type="text/javascript" src="autocomplete-jquery-ui.js"></script>

     <link rel=stylesheet href="autocomplete-jquery-ui.structure.css" type="text/css">


     <style type="text/css">
          .circular{
               border-radius: 50%;
               width: 100px;
               height: 100px;
               display: inline-block;
          }
          .no-list li {
               list-style-type: none;
          }
          body,html{
               text-align: center;
               background-color: blue;
               margin: 0px; 
          }


     </style>


</head>
<body ng-controller="AppCtrl"><!---controller define el controlador-->

     
     <input type="text" my-autocomplete="repos">


     <ul class="no-list" ng-cloak><!--ver una plantilla antes de que cargue -->
               <li ng-repeat="repo in repos" ng-hide="main_repo && main_repo!=repo.name">
                    <h1 class="inline-block">{{repo.full_name}}</h1>


                    <div class="circular" 
                    img-circle ="{{repo.owner.avatar_url}}"
                    ></div>


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