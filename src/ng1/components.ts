import * as angular from 'angular';

import { GithubUsersComponent } from './components/github-users/github-users.component';
import { GithubUserDetailsComponent } from './components/github-user-details/github-user-details.component';
import { EchoComponent } from './components/echo/echo.component';
import { DataSharingComponent } from './components/data-sharing/data-sharing.component';

export const Ng1Components = angular.module('app.components', [
  GithubUsersComponent.name,
  GithubUserDetailsComponent.name,
  EchoComponent.name,
  DataSharingComponent.name
]);
