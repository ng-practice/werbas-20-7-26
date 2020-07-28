import { Component } from '@angular/core';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'werbas-introduction';

  log(message: string): void {
    console.log(message);
  }
}
