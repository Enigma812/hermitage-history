import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorsPageComponent } from './interiors-page/interiors.component';

const routes: Routes = [{ path: '', component: InteriorsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorsRoutingModule { }
