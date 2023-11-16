import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello';
  user = 'Guest';
  updateUser(data: string) {
    this.user = data;
  }
}
