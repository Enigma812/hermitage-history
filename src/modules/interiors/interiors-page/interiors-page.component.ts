import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService
  ) {
    this.navigates$ = this._dataService.data$.pipe(map((data) => data.navigates));
    this.buildingName$ = this._route.params.pipe(map((params) => params['buildingPath']));

    this.interiors$ = this._route.params.pipe(
      map((params) => params['buildingPath']),
      switchMap((buildingPath) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors ?? [])
      ))
    );
  }
}
