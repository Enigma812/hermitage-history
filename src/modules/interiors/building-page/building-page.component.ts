import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './building-page.component.html',
  styleUrls: [ './building-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingPageComponent {
  constructor(
    private readonly _router: Router
  ) {}

  public wpClick(): void {
    this._router.navigate([ '/interiors/choice-interior' ]);
  }

}
