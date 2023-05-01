import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title$: Observable<string>;
  public logoPath = 'assets/pic/logo.svg';

  constructor(
    private readonly _route: ActivatedRoute
  ) {
    this.title$ = this._route.data.pipe(map((data) => data['title']));
  }

  public ngOnInit(): void {
    this.title$ = of(this._route.snapshot.data['title']);
  }

  public logoOver(isOver: boolean): void {
    if (isOver) {
      this.logoPath = 'assets/pic/logo-green.svg';
    } else {
      this.logoPath = 'assets/pic/logo.svg';
    }
  }
}
