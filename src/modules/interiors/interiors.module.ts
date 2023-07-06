import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BuildingPageComponent } from './building-page/building-page.component';
import { FloorsPageComponent } from './floors-page/floors-page.component';
import { ImageWithLoadingComponent } from './image-with-loading/image-with-loading.component';
import { InteriorsPageComponent } from './interiors-page/interiors-page.component';
import { InteriorsRoutingModule } from './interiors-routing.module';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';

@NgModule({
  declarations: [
    InteriorsPageComponent,
    BuildingPageComponent,
    FloorsPageComponent,
    RoomsPageComponent,
    ImageWithLoadingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule,
    NgxSkeletonLoaderModule,

    InteriorsRoutingModule
  ]
})
export class InteriorsModule {
}
