import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExteriorsPageComponent } from './exteriors-page/exteriors.component';
import { ExteriorsRoutingModule } from './exteriors-routing.module';

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
