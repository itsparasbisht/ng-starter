import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  handleLogin() {
    console.log(this.loginForm.value);
  }
}
