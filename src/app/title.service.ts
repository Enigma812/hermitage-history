import { Injectable, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnDestroy {
  public title$: Observable<string>;
  private readonly _titleSubject: Subject<string>;

  constructor() {
    this._titleSubject = new ReplaySubject<string>();
    this.title$ = this._titleSubject.asObservable();
  }

  public ngOnDestroy(): void {
    this._titleSubject.complete();
  }

  public setTitle(title: string): void {
    this._titleSubject.next(title);
  }
}
