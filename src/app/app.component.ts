import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello';
  score = 8;
  changeScore() {
    this.score = Math.floor(Math.random() * 10);
  }
}
