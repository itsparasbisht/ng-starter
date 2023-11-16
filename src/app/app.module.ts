import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';

@NgModule({
  declarations: [AppComponent, ChildComponent, UsdToInrPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
