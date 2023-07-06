import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map, switchMap } from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Collection } from '../../../app/models/collection';
import { Room } from '../../../app/models/room';
import { trackBy } from '../../../modules/utils/track-by';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: [ './rooms-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsPageComponent implements OnChanges {
  @ViewChild(NgbDropdown)
  public contentLoaded = false;
  public dropdown?: NgbDropdown;

  public room$: Observable<Room | undefined>;
  public collection$: Observable<Collection[]>;
  public buildingPath$: Observable<string>;

  public trackById = trackBy('id');

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
  }

  @HostListener('window:scroll', [ '$event' ])
  public onScroll() {
    if (this.dropdown !== undefined && this.dropdown.isOpen()) {
      this.dropdown.close();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes[''] !== undefined) {
      this.contentLoaded = false;
    }
  }

  public hideLoader() {
    this.contentLoaded = true;
  }

  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
