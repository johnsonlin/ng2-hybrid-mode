import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    WikiSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    UpgradeModule
  ],
  entryComponents: [
    GithubReposComponent,
    WikiSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
