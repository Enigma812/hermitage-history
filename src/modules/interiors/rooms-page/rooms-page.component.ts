import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: [ './rooms-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsPageComponent {

}
