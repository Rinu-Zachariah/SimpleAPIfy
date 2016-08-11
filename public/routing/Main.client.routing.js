var mainApp = angular.module('mainApp');

mainApp.config(function($routeProvider){
	$routeProvider
	.when('/login',
		{
			controller: 'MainController',
			templateUrl: 'views/Main.client.index.html'
		})
	.when('/profile',
		{
			controller: 'MainController',
			templateUrl: 'views/Main.client.profile.html'
		})
	.when('/songs',
		{
			controller: 'MainController',
			templateUrl: 'views/Main.client.songs.html'
		})
	.otherwise({redirectTo: '/login'});
});