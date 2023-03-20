import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroPageComponent } from './intro-page/intro.component';
import { IntroRoutingModule } from './intro-routing.module';

@NgModule({
  declarations: [
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule
  ]
})
export class IntroModule { }
