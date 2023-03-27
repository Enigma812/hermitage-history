import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingPageComponent } from './building-page/building-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BuildingPageComponent
  },
  {
    path: ':buildingPath',
    component: InteriorsPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InteriorsRoutingModule { }
