import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [BooksComponent, BookListComponent],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }
