import * as angular from 'angular';

export const GithubUsersService = angular.module('app.service.githubUsers', []);

GithubUsersService.service('GithubUsersService', ['$http', function($http) {
    this.getUsers = function() {
      return $http.get('https://api.github.com/users').then(response => response.data);
    };
}]);
