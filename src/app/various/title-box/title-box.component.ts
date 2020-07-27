import { Component, Input } from '@angular/core';

@Component({
  selector: 'ws-title-box',
  templateUrl: './title-box.component.pug',
  styleUrls: ['./title-box.component.sass'],
})
export class TitleBoxComponent {
  @Input() title: string;
}
