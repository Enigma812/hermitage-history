import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ImageWithLoadingModule } from '../common/image-with-loading/image-with-loading.module';

import { ExteriorsPageComponent } from './exteriors-page/exteriors.component';
import { ExteriorsRoutingModule } from './exteriors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImageWithLoadingModule,
    TranslateModule,
    ExteriorsRoutingModule
  ],
  declarations: [
    ExteriorsPageComponent
  ]
})
export class ExteriorsModule { }
