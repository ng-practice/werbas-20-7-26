import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-detail',
  templateUrl: './book-detail.component.pug',
  styleUrls: ['./book-detail.component.sass'],
})
export class BookDetailComponent implements OnDestroy {
  subscription = new Subscription();

  bookScalar: Book;
  book: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookApi: BookApi) {
    // Simple (not recommended), should be placed in ngOnInit
    this.subscription.add(
      this.route.params.subscribe(params =>
        this.subscription.add(
          this.bookApi
            .getBookByIsbn(params.isbn)
            .subscribe(bookFromApi => (this.bookScalar = bookFromApi))
        )
      )
    );

    // Advanced
    this.book = this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bookApi.getBookByIsbn(isbn))
      // mergeMap
      // concatMap
      // exhaustMap
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
