import * as angular from 'angular';

(<any>window).angular = angular;

import { GithubReposModule } from './components/github-respos';
import { WikiSearchModule } from './components/wiki-search/index';
import { Ng1Components } from './components';

let app = () => {
  return {
    templateUrl: './app.html',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  url: string;

  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

export const MODULE_NAME = 'app';

export const Ng1AppModule = angular.module(MODULE_NAME, [
  'ngRoute',
  Ng1Components.name,
  GithubReposModule.name,
  WikiSearchModule.name
]);

Ng1AppModule
  .directive('app', app)
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/ng1/home', {
        templateUrl: './app.html'
      })
  }])
  .controller('AppCtrl', AppCtrl);
