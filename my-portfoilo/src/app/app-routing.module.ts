import { ContactComponent } from './../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from 'src/personal-details/personal-details.component';

const routes:Routes = [
  //
  { path: '', redirectTo: '/contact', pathMatch: 'full' },  
  {path:'contact',component:ContactComponent}
  ]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
