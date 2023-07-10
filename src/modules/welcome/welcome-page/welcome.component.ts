import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent {

  constructor(
    private readonly _titleService: TitleService
  ) {
    this._titleService.setTitle('Утраченные интерьеры');
  }

}
