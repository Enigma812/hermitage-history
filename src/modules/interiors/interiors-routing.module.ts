import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingPageComponent } from './building-page/building-page.component';
import { InteriorPageComponent } from './choice-interior-page/interior-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BuildingPageComponent
  },
  {
    path: ':buildingName',
    component: InteriorPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InteriorsRoutingModule { }
