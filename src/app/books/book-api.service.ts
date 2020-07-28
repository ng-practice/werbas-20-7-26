import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookApi {
  #books: Book[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming',
    },
  ];

  getBooks(): Book[] {
    return this.#books;
  }
}