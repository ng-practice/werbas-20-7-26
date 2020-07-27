import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ws-title-box',
  templateUrl: './title-box.component.pug',
  styleUrls: ['./title-box.component.sass'],
})
export class TitleBoxComponent {
  @Input() title: string;
  @Output() titleClick = new EventEmitter<string>();

  emitTitleClick(): void {
    this.titleClick.emit('Title clicked');
  }
}
