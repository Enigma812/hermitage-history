import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InteriorsPageComponent } from './interiors-page/interiors.component';
import { InteriorsRoutingModule } from './interiors-routing.module';

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
