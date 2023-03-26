import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { map, Observable } from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Building } from '../../../app/models/building';

@Component({
  templateUrl: './building-page.component.html',
  styleUrls: [ './building-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildingPageComponent {

  public buildings$: Observable<Building[]>;

  constructor(
    private readonly _dataService: DataService
  ) {
    this.buildings$ = this._dataService.data$.pipe(map((data) => data.buildings));
  }

  public buildingTrackBy: TrackByFunction<Building> = (index: number, building: Building) => building.id;

}
