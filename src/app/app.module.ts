import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    StudentListComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, FormsModule, UserAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
