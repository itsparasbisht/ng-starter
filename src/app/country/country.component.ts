import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  template: ` <p class="custom" style="font-size: 30px;">country works!</p> `,
  styles: [
    `
      .custom {
        color: blue;
      }
    `,
  ],
})
export class CountryComponent {}
