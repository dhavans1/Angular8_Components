import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cockpitComponent } from './cockpit/cockpit.component';
import { serverElementComponent } from './server-element/server-element.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    cockpitComponent,
    serverElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
