import { BrowserModule } from '@angular/platform-browser';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { personalDetailsReducer } from 'src/personal-details/store/personal-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailsEffects } from 'src/personal-details/store/personal-details.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { PersonalDetailsComponent } from 'src/personal-details/personal-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from 'src/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioHomeComponent } from '../portfolio-home/portfolio-home.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ContactComponent,
    PortfolioHomeComponent
  ],
  imports: [
    StoreModule.forRoot({personalDetailsReducer}),  
    StoreModule.forFeature('personalDetails', personalDetailsReducer),
    EffectsModule.forRoot([PersonalDetailsEffects]),
    //EffectsModule.forFeature([PersonalDetailsEffects]), 
    /* StoreModule.forRoot({store:personalDetailsReducer}),
    EffectsModule.forRoot([PersonalDetailsEffects]), */
    HttpClientModule,
    BrowserModule,
    StoreDevtoolsModule.instrument({maxAge: 25}),
    AppRoutingModule
  
    // StoreModule.forFeature('personalDetails', personalDetailsReducer),    
    // EffectsModule.forFeature([PersonalDetailsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
