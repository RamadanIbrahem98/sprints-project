import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BodyComponent } from './home/body/body.component';
import { CardComponent } from './home/body/card/card.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutingModule } from './app-routing.module';
import { PlacePageComponent } from './place-page/place-page.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ProfileComponent,
    PlacePageComponent,
    FormsModule,
    appRoutingModule ,
    NgImageSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
