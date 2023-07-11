import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: [ './image-with-loading.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWithLoadingComponent implements OnChanges {
  @Input() public loader?: string;
  @Input() public image?: string;

  public isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['image'] !== undefined) {
      this.isLoading = true;
    }
  }

  public hideLoader() {
    this.isLoading = false;
  }
}
