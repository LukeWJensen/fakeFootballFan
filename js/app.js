var app = angular.module('fff', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	//$httpProvider.interceptors.push('httpRequestInterceptor');

	$httpProvider.defaults.useXDomain = true;

	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$stateProvider.state('home', {
		url: '/',
		controller: 'homeCtrl',
		templateUrl: 'js/home/homeTmpl.html'
	}).state('teams', {
		url: '/teams',
		controller: 'teamsCtrl',
		templateUrl: 'js/teams/teamsTmpl.html'
	});

	$urlRouterProvider.otherwise('/');

});