var siteApp = angular.module('personalSite', ['ngRoute']);
siteApp.value('title', "Phillip Kuznetsov");
siteApp.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/index.part.html'
		}).when('/about', {
			templateUrl: 'partials/about.part.html'
		}).when('/projects', {
			templateUrl: 'partials/projectbrowser.part.html'
		}).when('/projects/:link', {
			templateUrl: 'partials/project.part.html'
		}).otherwise({
			redirectTo: '/'
		});
});
siteApp.filter('projectURL', function(){
	return function(string){
		return "#/projects/"+string;
	};
});
siteApp.factory('Projects', function($http){
	function getData(callback){
		$http({
			method: 'GET', 
			url:'api/projects.json', 
			cache: true}).success(callback);
	}
	return {
		//returns all of the posts
		getProjects: getData, 
		//finds the post that matches the link
		find: function(link, callback){
			getData(function(data){
				var post = data.filter(function(entry){
					return entry.link === link;
				})[0];
				callback(post);
			});
		}
	};
});
//The controller for the entire webpage.
siteApp.controller('SuperCtrl', ['$scope', 'title', function($scope, title){
	$scope.title = title;
	$scope.homeLink = "/";
	$scope.links = [
		{"string" : "Home", 		"url" : $scope.homeLink		},
		{"string" : "About", 		"url" :"/#/about"	}, 
		{"string" : "Projects", 	"url" :"/#/projects"}];
}]);
siteApp.controller('ProjectCtrl', ['$scope', 'Projects', function($scope, Projects){
	Projects.getProjects(function(data){
		$scope.projects = data;
	});
}]);
siteApp.controller('SngProjectCtrl', ['$scope', '$routeParams', 'Projects', function($scope, $routeParams, Projects){
	var link = $routeParams.link;
	Projects.find(link, function(data){
		$scope.project = data;
	})
}]);