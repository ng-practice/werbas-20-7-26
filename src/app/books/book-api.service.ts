import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookApi {
  private endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }

  // #books: Book[] = [
  //   {
  //     title: 'Design Patterns',
  //     subtitle: 'Elements of Reusable Object-Oriented Software',
  //   },
  //   {
  //     title: 'REST und HTTP',
  //     subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
  //   },
  //   {
  //     title: 'Eloquent JavaScript',
  //     subtitle: 'A Modern Introduction to Programming',
  //   },
  // ];

  // getBooks(): Observable<Book[]> {
  //   return interval(500).pipe(
  //     map(() => this.#books),
  //     take(4)
  //   );
  // }
}
