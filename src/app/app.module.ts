import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexBox1Component } from './flex-box1/flex-box1.component';
import { FlexBox2Component } from './flex-box2/flex-box2.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexBox1Component,
    FlexBox2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
