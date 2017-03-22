import * as angular from 'angular';

import { GithubUsersComponent } from './components/github-users/github-users.component';
import { EchoComponent } from './components/echo/echo.component';

export const Ng1Components = angular.module('app.components', [
  GithubUsersComponent.name,
  EchoComponent.name
]);
