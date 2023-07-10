import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  public logoPath = 'assets/pic/logo.svg';
  public title$: Observable<string>;

  constructor(
    private readonly _titleService: TitleService
  ) {
    this.title$ = this._titleService.title$;
  }

  public logoOver(isOver: boolean): void {
    if (isOver) {
      this.logoPath = 'assets/pic/logo-green.svg';
    } else {
      this.logoPath = 'assets/pic/logo.svg';
    }
  }
}
