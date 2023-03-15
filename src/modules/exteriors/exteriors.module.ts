import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExteriorsRoutingModule } from './exteriors-routing.module';
import { ExteriorsPageComponent } from './exteriors-page/exteriors.component';


@NgModule({
  declarations: [
    ExteriorsPageComponent
  ],
  imports: [
    CommonModule,
    ExteriorsRoutingModule
  ]
})
export class ExteriorsModule { }
