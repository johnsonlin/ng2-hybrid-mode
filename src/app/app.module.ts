import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { UrlHandlingStrategy, UrlTree } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutesModule } from './app-routes/app-routes.module';
import { AppComponent } from './app.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';
import { Ng2HomeComponent } from './components/ng2-home/ng2-home.component';
import { MenuComponent } from './components/menu/menu.component';

export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) { return url.toString().startsWith('/ng2'); }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent,
    WikiSearchComponent,
    Ng2HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    UpgradeModule,
    AppRoutesModule
  ],
  entryComponents: [
    GithubReposComponent,
    WikiSearchComponent
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) {}
}
