import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  template: `
    <div style="margin-top: 200px">
      <table class="table table-dark table-striped">
        <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Buy groceries for next week</td>
          <td>In progress</td>
          <td>
            <button type="submit" class="btn btn-danger">Delete</button>
            <button type="submit" class="btn btn-success ms-1">Finished</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Renew car insurance</td>
          <td>In progress</td>
          <td>
            <button type="submit" class="btn btn-danger">Delete</button>
            <button type="submit" class="btn btn-success ms-1">Finished</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Sign up for online course</td>
          <td>In progress</td>
          <td>
            <button type="submit" class="btn btn-danger">Delete</button>
            <button type="submit" class="btn btn-success ms-1">Finished</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [
  ]
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
