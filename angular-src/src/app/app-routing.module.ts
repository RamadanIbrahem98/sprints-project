import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes =[
  { path: 'profile', component: ProfileComponent },
  { path: 'place', component: PlacePageComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent},
  

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class appRoutingModule { }
