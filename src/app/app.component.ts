import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hermitage-history';

  public logoPath: string = "../assets/pic/logo.svg";

  constructor() {}

  public logoOver(isOver: boolean): void {
    if (isOver) {
      this.logoPath = "../assets/pic/logo-green.svg";
    } else {
      this.logoPath = "../assets/pic/logo.svg";
    }
  }

}
