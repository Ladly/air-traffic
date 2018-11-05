import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'flights', component: HomePageComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
