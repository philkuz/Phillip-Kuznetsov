var siteApp = angular.module('personalSite', ['ngRoute']);
siteApp.value('title', "Phillip Kuznetsov"); //title handler
// route setup
siteApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/index.part.html'
		// }).when('/about', {
		// 	templateUrl: 'partials/about.part.html'
		// }).when('/projects', {
		// 	templateUrl: 'partials/projectbrowser.part.html'
		}).when('/projects/:link', {
			templateUrl: 'partials/project.part.html'
		}).otherwise({
			redirectTo: '/'
		});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);
// url path creation
siteApp.filter('projecturl', function(){
	return function(string){
		if(string.indexOf("http") > -1)
			return string;
		else
			return "#/projects/"+string;
	};
});
// project information grabber
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
//The controller for the webpage template
// currently handles nav bar
siteApp.controller('SuperCtrl', ['$scope', 'title', function($scope, title){
	$scope.title = title;
	$scope.links = [
		{"string" : "Home", 		"url" : "/"		},
		{"string" : "About", 		"url" :"/#about"	},
		{"string" : "Projects", 	"url" :"/#projects"}];
}]);
// the project controller to display all projects
siteApp.controller('ProjectCtrl', ['$scope', 'Projects', function($scope, Projects){
	Projects.getProjects(function(data){
		$scope.projects = data;
	});
}]);
siteApp.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
// the project controller for a single project
siteApp.controller('SngProjectCtrl', ['$scope', '$routeParams', 'Projects', function($scope, $routeParams, Projects){
	var link = $routeParams.link;
	Projects.find(link, function(data){
		$scope.project = data;
	})
}]);

// directive to use setup bg-img
