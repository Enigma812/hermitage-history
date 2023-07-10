import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: [ './intro.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroPageComponent {

  constructor(
    private readonly _titleService: TitleService
  ) {
    this._titleService.setTitle('Вступление');
  }
}
