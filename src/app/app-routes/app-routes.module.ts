import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ng2HomeComponent } from '../components/ng2-home/ng2-home.component';

const appRoutes: Routes = [
  {
    path: 'ng2/home',
    component: Ng2HomeComponent
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
