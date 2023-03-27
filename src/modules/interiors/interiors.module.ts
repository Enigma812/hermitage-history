import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BuildingPageComponent } from './building-page/building-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';
import { InteriorsRoutingModule } from './interiors-routing.module';

@NgModule({
  declarations: [
    InteriorsPageComponent,
    BuildingPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    InteriorsRoutingModule
  ]
})
export class InteriorsModule {
}
