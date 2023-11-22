import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [AppComponent, ChildComponent, UsdToInrPipe, RedElDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
