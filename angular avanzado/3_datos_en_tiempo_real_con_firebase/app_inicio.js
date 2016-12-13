angular.module('myApp', ['firebase'])
	.controller('ctrlFire', function($scope,$firebaseArray){

		var config = {
		    apiKey: "AIzaSyCx7ETkx6psTfRaXQaYPd31ymIbdFp-lsY",
		    authDomain: "tienda-8f8c7.firebaseapp.com",
		    databaseURL: "https://tienda-8f8c7.firebaseio.com",
		    storageBucket: "tienda-8f8c7.appspot.com",
		    messagingSenderId: "1098658063916"
		  };

		firebase.initializeApp(config);
		
		var ref = firebase.database().ref();

		$scope.listaProductos = $firebaseArray(ref);
/*
		$scope.agregarProducto = function(){
			$scope.listaProductos.$add({
				nombre: $scope.producto
			});
		}

		$scope.eliminarProducto = function(){

		}*/
	})