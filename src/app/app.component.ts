import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textColor = 'white';
  bgColor = 'black';

  toggleTheme() {
    if (this.textColor === 'white') {
      this.textColor = 'black';
      this.bgColor = 'white';
    } else {
      this.textColor = 'white';
      this.bgColor = 'black';
    }
  }
}
