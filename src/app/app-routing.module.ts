import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('../modules/intro/intro.module').then(m => m.IntroModule)
  },
  {
    path: 'interiors',
    loadChildren: () => import('../modules/interiors/interiors.module').then(m => m.InteriorsModule)
  },
  {
    path: 'exteriors',
    loadChildren: () => import('../modules/exteriors/exteriors.module').then(m => m.ExteriorsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
