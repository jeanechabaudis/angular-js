angular.module('myApp', [])
	.controller('ctrlMiDirectiva', function($scope){
		$scope.nombre = 'Jean Pool';
		$scope.apellidos = 'Echabaudis Bedriñana';
	})
	.directive('elUsuario', function(){
		return {
			template: 'Nombre: {{ nombre }} </br> Apellidos: {{ apellidos }}'
		}
	})