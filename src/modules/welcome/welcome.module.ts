import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { WelcomePageComponent } from './welcome-page/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
