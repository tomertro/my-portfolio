import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ContactModule } from './../contact/contact.module';
import { BrowserModule } from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { personalDetailsReducer } from 'src/personal-details/store/personal-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailsEffects } from 'src/personal-details/store/personal-details.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { PersonalDetailsComponent } from 'src/personal-details/personal-details.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'src/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioHomeComponent } from '../portfolio-home/portfolio-home.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/modal/modal.component';
import { ResumeComponent } from '../resume/resume.component';
import { JobExperienceComponent } from '../job-experience/job-experience.component';
import { AboutSiteComponent } from '../about-site/about-site.component';




@NgModule({
  declarations: [
    AppComponent,
    
    PersonalDetailsComponent,
    
    PortfolioHomeComponent,
   ContactComponent,
   ModalComponent,
   ResumeComponent,
   JobExperienceComponent,
   AboutSiteComponent
  
  ],
  exports:[ModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ContactModule,
    StoreModule.forRoot({}),  
    StoreModule.forFeature('personalDetails', personalDetailsReducer),
    EffectsModule.forRoot([PersonalDetailsEffects]),
    FormsModule,
    BrowserModule,
    StoreDevtoolsModule.instrument({maxAge: 25}),
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }