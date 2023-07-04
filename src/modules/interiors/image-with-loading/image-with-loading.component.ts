import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: [ './image-with-loading.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWithLoadingComponent {
  @Input() public loader?: string;
  @Input() public height = 200;
  @Input() public width = 200;
  @Input() public image?: string;

  public isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  public hideLoader() {
    this.isLoading = false;
  }
}
