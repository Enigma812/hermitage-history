import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

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

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService,
    private readonly _router: Router
  ) {
    this.buildingName$ = this._route.params.pipe(map((params) => params['buildingPath']));

    this.interiors$ = this._route.params.pipe(
      map((params) => params['buildingPath']),
      switchMap((buildingPath) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors ?? [])
      ))
    );
  }

  public topFunctionTimeout(interior: Interior) {
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this._router.navigate([ interior.path ], { relativeTo: this._route });
    }, 500);
  }

  public topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
