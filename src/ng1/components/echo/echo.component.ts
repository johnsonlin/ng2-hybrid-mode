import * as angular from 'angular';

import { EchoService } from './echo.service';

export const EchoComponent = angular.module('app.component.echo', [
  EchoService.name
]);

EchoComponent
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/ng1/echo', {
        template: '<echo></echo>'
      })
  }])
  .directive('echo', [function() {
    return {
      restrict: 'E',
      templateUrl: './echo.template.html',
      scope: {},
      controller: ['EchoService', function(EchoService) {
        this.startEcho = () => {
          this.echo(this.word);
          this.echo3x(this.word);
        };

        this.echo = (word) => {
          this.echoResult = word;
        };

        this.echo3x = (word) => {
          this.echo3xResult = EchoService.echo3x(word);
        }
      }],
      controllerAs: 'vm'
    }
  }]);