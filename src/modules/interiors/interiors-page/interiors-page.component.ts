import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  map,
  Observable,
  ReplaySubject,
  Subject,
  switchMap
} from 'rxjs';

import { DataService } from '../../../app/data.service';
import { Floor } from '../../../app/models/floor';
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
  public floors$: Subject<Floor[]>;

  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService,
    private readonly modalService: NgbModal
  ) {
    this.buildingName$ = this._route.params.pipe(map((params) => params['buildingPath']));
    this.floors$ = new ReplaySubject();

    this.interiors$ = this._route.params.pipe(
      map((params) => params['buildingPath']),
      switchMap((buildingPath) => this._dataService.data$.pipe(
        map((data) => data.buildings.find((building) => building.path === buildingPath)),
        map((building) => building?.interiors ?? [])
      ))
    );
  }

  public open(interior: Interior, content: TemplateRef<any>) {
    this.floors$.next(interior.floors);
    this.modalService.open(content);
  }

  public floorOver(imgButton: HTMLImageElement, imgHover: string): void {
    imgButton.src = imgHover;
  }
}
