import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.pug',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  #subscription: Subscription;
  books: Book[];

  constructor(private bookApi: BookApi) {}

  ngOnInit(): void {
    this.#subscription = this.bookApi.getBooks().subscribe(
      booksFromApi => (this.books = booksFromApi),
      err => {},
      () => console.info('FERTSCH')
    );
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }
}
