import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class AppModule { }
