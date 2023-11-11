import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-wishlist';
  showName(name: string) {
    alert(name);
  }
  showValue(value: string) {
    console.log(value);
  }
}
