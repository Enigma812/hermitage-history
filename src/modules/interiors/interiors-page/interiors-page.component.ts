import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { TitleService } from 'src/app/title.service';

import { DataService } from '../../../app/data.service';
import { Interior } from '../../../app/models/interior';
import { trackBy } from '../../utils/track-by';

@Component({
  templateUrl: './interiors-page.component.html',
  styleUrls: [ './interiors-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteriorsPageComponent {
  public interiors$: Observable<Interior[]>;

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService,
    private readonly _router: Router,
    private readonly _titleService: TitleService
  ) {
    const building$ = this._route.params.pipe(
      map((params) => params['buildingPath']),
      switchMap((buildingPath) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath))
      ))
    );
    building$
      .pipe(takeUntilDestroyed())
      .subscribe((building) => {
        this._titleService.setTitle(building?.title);
      });
    this.interiors$ = building$.pipe(
      map((building) => building?.interiors ?? [])
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
