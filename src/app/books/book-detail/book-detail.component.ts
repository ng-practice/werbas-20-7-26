import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-detail',
  templateUrl: './book-detail.component.pug',
  styleUrls: ['./book-detail.component.sass'],
})
export class BookDetailComponent {
  book: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookApi: BookApi) {
    this.book = this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookApi.getBookByIsbn(isbn))
    );
  }
}
