import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-wishlist';
  count = 0;
  counter(type: string) {
    type === 'increment' ? this.count++ : this.count--;
  }
}
