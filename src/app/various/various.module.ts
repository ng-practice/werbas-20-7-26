import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [InfoBoxComponent, MouseCursorComponent, TitleBoxComponent],
  imports: [CommonModule],
  exports: [InfoBoxComponent, MouseCursorComponent, TitleBoxComponent],
})
export class VariousModule {}
