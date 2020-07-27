import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';

@NgModule({
  declarations: [InfoBoxComponent, MouseCursorComponent],
  imports: [CommonModule],
  exports: [InfoBoxComponent, MouseCursorComponent],
})
export class VariousModule {}
