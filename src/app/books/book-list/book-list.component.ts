import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.pug',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bookApi: BookApi) {}

  ngOnInit(): void {
    this.books = this.bookApi.getBooks();
  }
}
