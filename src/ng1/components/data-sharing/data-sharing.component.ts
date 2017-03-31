import * as angular from 'angular';

import { DataSharingService } from './data-sharing.service';

export const DataSharingComponent = angular.module('app.component.dataSharing', [
  DataSharingService.name
]);

DataSharingComponent
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/data-sharing', {
        templateUrl: './data-sharing.template.html',
        controller: [function() {
          this.updateUser = (userName) => {
            this.user = userName
          };

          this.setRepos = (repos) => {
            this.repos = repos;
          }
        }],
        controllerAs: 'vm'
      })
  }]);