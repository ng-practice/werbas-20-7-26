import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-edit',
  templateUrl: './book-edit.component.pug',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book: Book = {} as Book;

  constructor(private route: ActivatedRoute, private bookApi: BookApi) {}

  save(book: Book): void {
    console.log(book);
  }

  ngOnInit(): void {
    // this.route.params
    //   .pipe(
    //     map(params => params.isbn),
    //     switchMap(isbn => this.bookApi.getBookByIsbn(isbn))
    //   )
    //   .subscribe(book => (this.book = book));
  }
}
