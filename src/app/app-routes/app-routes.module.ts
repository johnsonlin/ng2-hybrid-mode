import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ng2HomeComponent } from '../components/ng2-home/ng2-home.component';
import { GithubRepoDetailsComponent } from '../components/github-repo-details/github-repo-details.component';

const appRoutes: Routes = [
  {
    path: 'ng2/home',
    component: Ng2HomeComponent
  },
  {
    path: 'ng2/repo/:user/:repo',
    component: GithubRepoDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
