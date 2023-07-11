import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { ImageWithLoadingModule } from '../common/image-with-loading/image-with-loading.module';

import { BuildingPageComponent } from './building-page/building-page.component';
import { FloorsPageComponent } from './floors-page/floors-page.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';
import { InteriorsRoutingModule } from './interiors-routing.module';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule,
    ImageWithLoadingModule,
    InteriorsRoutingModule
  ],
  declarations: [
    InteriorsPageComponent,
    BuildingPageComponent,
    FloorsPageComponent,
    RoomsPageComponent
  ]
})
export class InteriorsModule {
}
