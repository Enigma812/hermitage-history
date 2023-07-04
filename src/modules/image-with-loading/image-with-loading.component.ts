import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: [ './image-with-loading.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWithLoadingComponent {

}
