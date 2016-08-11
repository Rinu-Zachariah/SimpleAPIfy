'use strict';

var mainApp = angular.module('mainApp', ['ngRoute']);
mainApp.controller('MainController',['$scope','$http',function($scope,$http){
	
	$scope.getSong = "";

    

	$scope.searchSong = function(text){
		
		$http({
            method: 'GET',
            url: '/songs/' + text,
            }).then(function successCallback(response) {              
            	console.log(response.data);  
            	$scope.getSong = response.data;  
            	//console.log($scope.getSong);                 
            }, function errorCallback(response) {          
                console.log("error");
        	}); 
           
	};


	


}]);
