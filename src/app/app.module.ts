import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProgrammingSkillsComponent } from 'src/programming-skills/programming-skills.component';
import { ProgrammingSkillsEffects } from 'src/programming-skills/store/programming-skills.effects';
import { programmingSkillsReducer } from 'src/programming-skills/store/programming-skills.reducers';
import { ServerErrorInterceptor } from './serverErrorInterceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    
    PersonalDetailsComponent,
    
    PortfolioHomeComponent,
   ContactComponent,
   ModalComponent,
   ResumeComponent,
   JobExperienceComponent,
   AboutSiteComponent,
   ProgrammingSkillsComponent,
   PageNotFoundComponent,
   
  
  ],
  exports:[ModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ContactModule,
    StoreModule.forRoot({}),  
    EffectsModule.forRoot([]),
    StoreModule.forFeature('personalDetails', personalDetailsReducer),
    StoreModule.forFeature('programmingSkills', programmingSkillsReducer),
    EffectsModule.forFeature([PersonalDetailsEffects,ProgrammingSkillsEffects]),
   
    
    FormsModule,
    BrowserModule,
    StoreDevtoolsModule.instrument({maxAge: 25}),
    AppRoutingModule
  
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
