var app = angular.module('fff');

app.service('teamsService', function($http){

	this.getTeamData = function(team){

		var url = 'https://api.fantasydata.net/nfl/v2/json/Teams';

		return $http({
			method: 'GET',
			url: url,
			withCredentials: true,
			headers: {
				'Ocp-Apim-Subscription-Key': 'c383f77169cf47d0b034cf187fe11bb1'
			}
		}).then(function(data){
			var myData = data;
			console.log(myData);
		});
	}

});