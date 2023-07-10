import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  public logoPath = 'assets/pic/logo.svg';

  constructor() {
    return;
  }

  public logoOver(isOver: boolean): void {
    if (isOver) {
      this.logoPath = 'assets/pic/logo-green.svg';
    } else {
      this.logoPath = 'assets/pic/logo.svg';
    }
  }
}
