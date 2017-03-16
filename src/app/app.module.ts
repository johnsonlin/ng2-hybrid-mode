import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
  ],
  entryComponents: [
    GithubReposComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
