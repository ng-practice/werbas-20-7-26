import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookApi } from '../book-api.service';

@Component({
  selector: 'ws-book-create',
  templateUrl: './book-create.component.pug',
  styleUrls: ['./book-create.component.sass'],
})
export class BookCreateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private bookApi: BookApi) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.bookApi.save(this.form.value).subscribe();
  }
}
