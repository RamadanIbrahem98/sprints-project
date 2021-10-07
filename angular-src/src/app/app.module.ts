import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutingModule } from './app-routing.module';
import { PlacePageComponent } from './place-page/place-page.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { CardComponent } from './home/body/card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PlacePageComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    CardComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, appRoutingModule , NgImageSliderModule ,BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
