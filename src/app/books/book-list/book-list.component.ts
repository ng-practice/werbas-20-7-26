import { Component } from '@angular/core';
import { Book } from '../book';
import { BookApi } from '../book-api.service';
@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.pug',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent {
  books: Book[];

  constructor(private bookApi: BookApi) {
    this.books = this.bookApi.getBooks();
  }
}
