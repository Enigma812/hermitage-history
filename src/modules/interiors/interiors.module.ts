import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BuildingPageComponent } from './building-page/building-page.component';
import { InteriorPageComponent } from './choice-interior-page/interior-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors.component';
import { InteriorsRoutingModule } from './interiors-routing.module';

@NgModule({
  declarations: [
    InteriorsPageComponent,
    InteriorPageComponent,
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
