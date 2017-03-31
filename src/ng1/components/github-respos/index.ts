import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { GithubReposComponent } from '../../../app/components/github-repos/github-repos.component';
import { GithubReposService } from '../../../app/components/github-repos/github-repos.service';

export const GithubReposModule = angular.module('GithubReposModule', []);

GithubReposModule
  .directive('githubRepos', downgradeComponent({
    component: GithubReposComponent,
    inputs: ['user'],
    outputs: ['repos']
  }))
  .service('GithubReposService', downgradeInjectable(GithubReposService));

export function exportGithubRepoService(m: UpgradeModule): GithubReposService {
  return m.injector.get('GithubReposService');
}

@NgModule({
  declarations: [
    GithubReposComponent
  ],
  entryComponents: [
    GithubReposComponent
  ],
  providers: [
    {provide: GithubReposService, useFactory: exportGithubRepoService, deps: [UpgradeModule]}
  ]
})
export class GithubReposNgModule {}
