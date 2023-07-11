import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ImageWithLoadingComponent } from './image-with-loading.component';

@NgModule ({
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
    ImageWithLoadingComponent
  ],
  exports: [
    ImageWithLoadingComponent
  ]
})
export class ImageWithLoadingModule {
}
