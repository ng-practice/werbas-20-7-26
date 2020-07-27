import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-info-box',
  templateUrl: './info-box.component.pug',
  styleUrls: ['./info-box.component.sass'],
})
export class InfoBoxComponent implements OnInit {
  isHidden = true;

  constructor() {}

  ngOnInit(): void {}
}
