var app = angular.module('fff');

app.service('teamsService', function($http){

	this.getTeamData = function(team){

		var url = 'https://api.fantasydata.net/nfl/v2/json/Teams';

		return $http({
			method: 'GET',
			url: url,
			withCredentials: true,
			headers: {
				'Ocp-Apim-Subscription-Key': 'key goes here'
			}
		}).then(function(data){
			var myData = data;
			console.log(myData);
		});
	}

});