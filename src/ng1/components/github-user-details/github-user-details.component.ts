import * as angular from 'angular';

import { GithubUserDetailsService } from './github-user-details.service';

export const GithubUserDetailsComponent = angular.module('app.component.githubUserDetails', [
  GithubUserDetailsService.name
]);

GithubUserDetailsComponent
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/user/:user', {
        template: '<github-user-details user="{{vm.userName}}"></github-user-details>',
        controller: ['$routeParams', function($routeParams) {
          this.userName = $routeParams.user;
        }],
        controllerAs: 'vm'
      })
  }])
  .directive('githubUserDetails', [function() {
    return {
      restrict: 'E',
      templateUrl: './github-user-details.template.html',
      scope: {
        user: '@'
      },
      controller: ['$scope', 'GithubUserDetailsService', function($scope, GithubUserDetailsService) {
        GithubUserDetailsService.getInfo($scope.user).then((userInfo) => {
          this.userInfo = userInfo;
        });
      }],
      controllerAs: 'vm'
    }
  }]);
