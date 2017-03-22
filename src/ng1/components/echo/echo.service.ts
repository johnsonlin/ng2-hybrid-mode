import * as angular from 'angular';

export const EchoService = angular.module('app.service.echo', []);

EchoService.service('EchoService', [function() {
    this.echo3x = function(words) {
      return [words, words, words].join(', ');
    };
}]);
