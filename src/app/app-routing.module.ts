import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './pages/about/about.component';

import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HousepageComponent } from './pages/housepage/housepage.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'apartments/:id',component:HousepageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'apartments' ,component:ApartmentsComponent},
  {path:'signin' ,component:SigninComponent},
  {path:'faq' ,component:FaqComponent},
  {path:'profile' ,component:ProfileComponent},
  {path:'login' ,component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
