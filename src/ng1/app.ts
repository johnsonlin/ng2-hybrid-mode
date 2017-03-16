import * as angular from 'angular';

(<any>window).angular = angular;

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
  Ng1Components.name
]);

Ng1Components.directive('app', app)
  .controller('AppCtrl', AppCtrl);
