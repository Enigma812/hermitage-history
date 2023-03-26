import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

import { Data } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data$: Observable<Data>;
  private readonly _dataSubject: Subject<Data>;

  constructor(
    private readonly _http: HttpClient
  ) {
    this._dataSubject = new ReplaySubject<Data>();
    this.data$ = this._dataSubject.asObservable();
    this.fetchData();
  }

  private fetchData(): void {
    this._http.get<Data>('/assets/data/data.json')
      .subscribe((data) => {
        this._dataSubject.next(data);
      });
  }
}
