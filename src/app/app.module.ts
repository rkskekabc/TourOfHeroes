// src/app/app.module.ts

import { NgModule }      from '@angular/core'; //1
import { BrowserModule } from '@angular/platform-browser'; //1
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here //1

import { AppComponent }  from './app.component'; //2
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({ //3
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } //4
