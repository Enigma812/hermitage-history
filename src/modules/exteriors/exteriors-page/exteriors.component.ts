import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleService } from 'src/app/title.service';

@Component({
  selector: 'app-exteriors',
  templateUrl: './exteriors.component.html',
  styleUrls: [ './exteriors.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExteriorsPageComponent {

  constructor(
    private readonly _titleService: TitleService
  ) {
    this._titleService.setTitle('Экстерьеры');
  }

}
