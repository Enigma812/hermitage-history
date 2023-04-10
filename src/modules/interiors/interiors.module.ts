import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BuildingPageComponent } from './building-page/building-page.component';
import { FloorsPageComponent } from './floors-page/floors-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';
import { InteriorsRoutingModule } from './interiors-routing.module';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

@NgModule({
  declarations: [
    InteriorsPageComponent,
    BuildingPageComponent,
    FloorsPageComponent,
    RoomsPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    InteriorsRoutingModule
  ]
})
export class InteriorsModule {
}
