import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hermitage-history';

  constructor() {}


public show(): boolean {
  let url = window.location.href;
  return url.indexOf('intro') === -1;
}

}
