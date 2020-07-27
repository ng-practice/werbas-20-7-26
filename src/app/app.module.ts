import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BooksModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
