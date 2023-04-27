import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { trackBy } from 'src/modules/utils/track-by';

import { DataService } from '../../../app/data.service';
import { Collection } from '../../../app/models/collection';
import { Room } from '../../../app/models/room';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: [ './rooms-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsPageComponent {
  public room$: Observable<Room | undefined>;
  public collection$: Observable<Collection[]>;
  public buildingPath$: Observable<string>;
  // public upToFloor$: Observable<string>;

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
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

    this.collection$ = this._route.params.pipe(
      map((params) => [ params['buildingPath'], params['interiorPath'], params['floorPath'], params['roomPath'] ]),
      switchMap(([ buildingPath, interiorPath, floorPath, roomPath ]) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors.find((interior) => interior.path === interiorPath)),
        map((interior) => interior?.floors.find((floor) => floor.path === floorPath)),
        map((floor) => floor?.rooms.find((room) => room.path === roomPath)),
        map((room) => room?.collections ?? [])
      ))
    );

    this.buildingPath$ = this._route.params.pipe(map((params) => params['buildingPath']));
    // this.upToFloor$ = this._route.params.pipe(map((params) => params['jordan-staircase']));
  }

  public upToFloor(value: Room): void {
    if(value.upToFloor !== undefined) {
      this._router.navigate([ '/interiors/winter-palace/main-stairs/second-floor/jordan-staircase' ]);
    }
  };

  public downToFloor(value: Room): void {
    if(value.downToFloor !== undefined) {
      this._router.navigate([ '/interiors/winter-palace/main-stairs/first-floor/jordan-gallery' ]);
    }
  };
}
