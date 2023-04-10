import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuildingPageComponent } from './building-page/building-page.component';
import { FloorsPageComponent } from './floors-page/floors-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BuildingPageComponent
  },
  {
    path: ':buildingPath',
    component: InteriorsPageComponent
  },
  {
    path: ':buildingPath/:interiorPath',
    component: FloorsPageComponent
  },
  {
    path: ':buildingPath/:interiorPath/:roomPath',
    component: RoomsPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class InteriorsRoutingModule { }
