import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Room } from '../../../app/models/room';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: [ './rooms-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsPageComponent {
  public room$: Observable<Room | undefined>;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService
  ) {
    this.room$ = this._route.params.pipe(
      map((params) => [ params['buildingPath'], params['interiorPath'], params['floorPath'], params['roomPath'] ]),
      switchMap(([ buildingPath, interiorPath, floorPath, roomPath ]) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors.find((interior) => interior.path === interiorPath)),
        map((interior) => interior?.floors.find((floor) => floor.path === floorPath)),
        map((floor) => floor?.rooms.find((room) => room.path === roomPath))
      ))
    );
  }
}
