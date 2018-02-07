import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RoomComponent } from './components/room/room.component';
import { ContactsComponent } from './components/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    RestaurantComponent,
    RoomComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'about-us' , component: AboutUsComponent },
      { path: 'restaurant' , component: RestaurantComponent },
      { path: 'room' , component: RoomComponent },
      { path: 'contacts' , component: ContactsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
