// src/app/app.module.ts

import { NgModule }      from '@angular/core'; //1
import { BrowserModule } from '@angular/platform-browser'; //1
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here //1

import { AppComponent }  from './app.component'; //2
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({ //3
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } //4
