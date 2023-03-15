import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorsRoutingModule } from './interiors-routing.module';
import { InteriorsPageComponent } from './interiors-page/interiors.component';


@NgModule({
  declarations: [
    InteriorsPageComponent
  ],
  imports: [
    CommonModule,
    InteriorsRoutingModule
  ]
})
export class InteriorsModule { }
