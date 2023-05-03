import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Floor } from '../../../app/models/floor';
import { trackBy } from '../../../modules/utils/track-by';

@Component({
  selector: 'app-floors-page',
  templateUrl: './floors-page.component.html',
  styleUrls: [ './floors-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FloorsPageComponent {
  public floors$: Observable<Floor[]>;

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _dataService: DataService
  ) {
    this.floors$ = this._route.params.pipe(
      map((params) => [ params['buildingPath'], params['interiorPath'] ]),
      switchMap(([ buildingPath, interiorPath ]) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors.find((interior) => interior.path === interiorPath)),
        map((interior) => interior?.floors ?? [])
      ))
    );
  }

  public floorOverEnter(imgButton: HTMLImageElement, floor: Floor): void {
    if (floor.isActive) {
      imgButton.src = floor.imgHover;
    }
  }

  public floorOverLeave(imgButton: HTMLImageElement, floor: Floor): void {
    if (floor.isActive) {
      imgButton.src = floor.img;
    }
  }

  public redirectToRoom(floor: Floor): void {
    if (floor.rooms.length > 0) {
      setTimeout(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this._router.navigate([ floor.path, floor.rooms[0].path ], { relativeTo: this._route });
      }, 100);
    }
  }

  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
