import { Component } from '@angular/core';

@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.pug',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent {
  books = [
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
}
