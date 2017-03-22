import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { WikiSearchComponent } from '../../../app/components/wiki-search/wiki-search.component';
import { WikiSearchService } from '../../../app/components/wiki-search/wiki-search.service';

export const WikiSearchModule = angular.module('WikiSearchModule', []);

WikiSearchModule
  .directive('wikiSearch', downgradeComponent({
    component: WikiSearchComponent
  }))
  .service('WikiSearchService', downgradeInjectable(WikiSearchService));

export function exportGithubRepoService(m: UpgradeModule): WikiSearchService {
  return m.injector.get('WikiSearchService');
}

@NgModule({
  declarations: [
    WikiSearchComponent
  ],
  entryComponents: [
    WikiSearchComponent
  ],
  providers: [
    {provide: WikiSearchService, useFactory: exportGithubRepoService, deps: [UpgradeModule]}
  ]
})
export class WikiSearchNgModule {}
