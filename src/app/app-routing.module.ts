import { ResumeComponent } from './../resume/resume.component';
import { PortfolioHomeComponent } from 'src/portfolio-home/portfolio-home.component';
import { ContactComponent } from './../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from 'src/personal-details/personal-details.component';
import { AboutSiteComponent } from 'src/about-site/about-site.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

const routes:Routes = [
  //
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  {path:'contact',component:ContactComponent,canDeactivate:[CanDeactivateGuard]},
  {path:'home',component:PortfolioHomeComponent},
  {path:'resume',component:ResumeComponent},
  {path:'about',component:AboutSiteComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
  ]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
