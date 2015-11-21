var app = angular.module('fff');

app.controller('teamsCtrl', function($scope, teamsService){
	$scope.getTeamData = function(team){
		teamsService.getTeamData().then(function(data){
			console.log(data);
		});
	};
	$scope.getTeamData();
});