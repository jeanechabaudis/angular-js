angular.module('navegacion',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'plantillas/inicio.html'
		})
	}])