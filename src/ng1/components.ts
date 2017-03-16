import * as angular from 'angular';

import { GithubUsersComponent } from './components/github-users/github-users.component';

export const Ng1Components = angular.module('app.components', [
  GithubUsersComponent.name
]);
