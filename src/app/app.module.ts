import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { LayoutModule } from './layout/layout.module';
import { VariousModule } from './various/various.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BooksModule,
    LayoutModule,
    VariousModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
