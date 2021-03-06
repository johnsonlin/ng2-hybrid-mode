import * as angular from 'angular';

import { GithubUsersService } from './github-users.service';

export const GithubUsersComponent = angular.module('app.component.githubUsers', [
  GithubUsersService.name
]);

GithubUsersComponent.directive('githubUsers', [function() {
    return {
      restrict: 'E',
      templateUrl: './github-users.template.html',
      scope: {},
      controller: ['GithubUsersService', function(GithubUsersService) {
        GithubUsersService.getUsers().then((users) => {
          console.log(users);
          this.users = users.map(user => user.login);
        });
      }],
      controllerAs: 'vm'
    }
  }]);
