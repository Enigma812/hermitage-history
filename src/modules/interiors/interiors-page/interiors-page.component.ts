import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, switchMap } from 'rxjs';
import { Navigate } from 'src/app/models/navigate';

import { DataService } from '../../../app/data.service';
import { Interior } from '../../../app/models/interior';
import { trackBy } from '../../utils/track-by';

@Component({
  templateUrl: './interiors-page.component.html',
  styleUrls: [ './interiors-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteriorsPageComponent {
  public buildingName$: Observable<string>;
  public interiors$: Observable<Interior[]>;
  public navigates$: Observable<Navigate>;
  public firstFloorPath = '../assets/pic/first-floor.png';
  public secondFloorPath = '../assets/pic/second-floor.png';
  public thirdFloorPath = '../assets/pic/third-floor.png';

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService,
    private readonly modalService: NgbModal
  ) {
    this.navigates$ = this._dataService.data$.pipe(map((data) => data.navigates));
    // this.firstFloorPath = this.navigates$.pipe(map((img) => img.fFloor));
    this.buildingName$ = this._route.params.pipe(map((params) => params['buildingPath']));

    this.interiors$ = this._route.params.pipe(
      map((params) => params['buildingPath']),
      switchMap((buildingPath) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors ?? [])
      ))
    );
  }

  public open(content: any) {
    this.modalService.open(content);
  }

  public firstFloorOver(isOver: boolean): void {
    if (isOver) {
      this.firstFloorPath = '../assets/pic/first-floor-hover.png';
    } else {
      this.firstFloorPath = '../assets/pic/first-floor.png';
    }
  }

  public secondFloorOver(isOver: boolean): void {
    if (isOver) {
      this.secondFloorPath = '../assets/pic/second-floor-hover.png';
    } else {
      this.secondFloorPath = '../assets/pic/second-floor.png';
    }
  }

  public thirdFloorOver(isOver: boolean): void {
    if (isOver) {
      this.thirdFloorPath = '../assets/pic/third-floor-hover.png';
    } else {
      this.thirdFloorPath = '../assets/pic/third-floor.png';
    }
  }
}
