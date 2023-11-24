import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedElDirective } from './red-el.directive';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurEmployeesComponent } from './our-employees/our-employees.component';
import { OurHistoryComponent } from './our-history/our-history.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'employees', component: OurEmployeesComponent },
      { path: 'history', component: OurHistoryComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RedElDirective,
    UserComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    OurEmployeesComponent,
    OurHistoryComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
