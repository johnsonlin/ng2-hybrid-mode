import * as angular from 'angular';

export const GithubUserDetailsService = angular.module('app.service.githubUserDetails', []);

GithubUserDetailsService.service('GithubUserDetailsService', ['$http', function($http) {
    this.getInfo = function(userName) {
      return $http.get('https://api.github.com/users/' + userName).then(response => response.data);
    };
}]);
