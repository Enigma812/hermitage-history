/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // если совпадает полностью с path и только с ней
    loadChildren: () => import('../modules/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('../modules/intro/intro.module').then((m) => m.IntroModule),
    data: {
      title: 'Intro.Title'
    }
  },
  {
    path: 'interiors',
    loadChildren: () => import('../modules/interiors/interiors.module').then((m) => m.InteriorsModule)
  },
  {
    path: 'exteriors',
    loadChildren: () => import('../modules/exteriors/exteriors.module').then((m) => m.ExteriorsModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
