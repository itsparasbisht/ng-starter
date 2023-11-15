import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello';
  users = [
    { name: 'John', email: 'john@test.com' },
    { name: 'Skyler', email: 'skyler@test.com' },
    { name: 'Emma', email: 'emma@test.com' },
  ];
}
