import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <div class="position-relative">
      <div class="input-group w-25 position-absolute top-0 start-50 translate-middle mt-5">
        <input type="text" class="form-control" placeholder="ToDo hinzufügen" aria-label="ToDo hinzufügen">
        <button class="btn btn-success" type="button">Add</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
