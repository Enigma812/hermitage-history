import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'hermitage-history';

  public logoPath = '../assets/pic/logo.svg';

  public logoOver(isOver: boolean): void {
    if (isOver) {
      this.logoPath = '../assets/pic/logo-green.svg';
    } else {
      this.logoPath = '../assets/pic/logo.svg';
    }
  }
}
