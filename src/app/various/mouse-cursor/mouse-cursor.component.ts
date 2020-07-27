import { Component } from '@angular/core';

@Component({
  selector: 'ws-mouse-cursor',
  templateUrl: './mouse-cursor.component.pug',
  styleUrls: ['./mouse-cursor.component.sass'],
})
export class MouseCursorComponent {
  x = 0;
  y = 0;

  updateCoordinates(event: MouseEvent): void {
    this.x = event.x;
    this.y = event.y;
  }
}
