angular.module('myApp')
	.controller('HomeCtrl', function ($scope) {
			$scope.entries = [

				{name: 'Angular'},
				{name: 'Rails 4.1'},
				{name: 'UI Router'},
				{name: 'Together!!'}
				];

			$scope.addEntry = function () {
				$scope.entries.push($scope.newEntry)
				$scope.newEntry = {}
			}

			$scope.drawWinner = function () {
				var randNum = Math.floor(Math.random() * $scope.entries.length);
				var entry = $scope.entries[randNum];
				entry.winner = true;
				$scope.lastWinner = entry;
			}

			$scope.clearEntries = function () {
				$scope.entries = [];
			}
	});

