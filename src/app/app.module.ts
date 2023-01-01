import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// let angular eligible for API calls by importing HTTPClientModule
import { HttpClientModule } from '@angular/common/http';
// HttpClientModule => Http Client Class 
// which is mostly used for forwarding Http class like GET, POST, PUT & DELETE

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
