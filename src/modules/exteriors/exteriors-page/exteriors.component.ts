import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Collection } from 'src/app/models/collection';
import { Exterior } from 'src/app/models/exterior';
import { TitleService } from 'src/app/title.service';
import { trackBy } from 'src/modules/utils/track-by';

@Component({
  selector: 'app-exteriors',
  templateUrl: './exteriors.component.html',
  styleUrls: [ './exteriors.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExteriorsPageComponent {

  public exterior$: Observable<Exterior>;
  public collection$: Observable<Collection[]>;

  public trackById = trackBy('id');

  constructor(
    private readonly _dataService: DataService,
    private readonly _route: ActivatedRoute,
    private readonly _titleService: TitleService
  ) {
    this._titleService.setTitle('Экстерьеры');
    this.exterior$ = this._dataService.data$.pipe(map((data) => data.exterior));
    this.collection$ = this.exterior$.pipe(map((exterior) => exterior.collections ?? []));
  }

}
