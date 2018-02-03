import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Home2Component } from './components/home2/home2.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RoomComponent } from './components/room/room.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    Home2Component,
    RestaurantComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'about-us' , component: AboutUsComponent },
      { path: 'home2' , component: Home2Component },
      { path: 'restaurant' , component: RestaurantComponent },
      { path: 'room' , component: RoomComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
