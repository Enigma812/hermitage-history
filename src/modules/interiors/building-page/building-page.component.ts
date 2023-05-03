import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Building } from '../../../app/models/building';
import { trackBy } from '../../utils/track-by';

@Component({
  templateUrl: './building-page.component.html',
  styleUrls: [ './building-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingPageComponent {

  public buildings$: Observable<Building[]>;

  public buildingTrackBy = trackBy('id');

  constructor(
    private readonly _dataService: DataService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this.buildings$ = this._dataService.data$.pipe(map((data) => data.buildings));
  }

  public topFunctionTimeout(building: Building) {
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this._router.navigate([ building.path ], { relativeTo: this._route });
    }, 500);
  }

  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
