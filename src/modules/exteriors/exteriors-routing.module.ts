import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExteriorsPageComponent } from './exteriors-page/exteriors.component';

const routes: Routes = [{ path: '', component: ExteriorsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExteriorsRoutingModule { }
