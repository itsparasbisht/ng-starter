import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  users() {
    return ['harry', 'niall', 'liam', 'louis', 'zayn'];
  }
}
