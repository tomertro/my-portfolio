import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { personalDetailsReducer } from 'src/personal-details/store/personal-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailsEffects } from 'src/personal-details/store/personal-details.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { PersonalDetailsComponent } from 'src/personal-details/personal-details.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent
  ],
  imports: [
    //StoreModule.forRoot({personalDetailsReducer}),   
    StoreModule.forRoot({store:personalDetailsReducer}),
    EffectsModule.forRoot([PersonalDetailsEffects]),
    HttpClientModule,
    BrowserModule,
    //StoreDevtoolsModule.instrument({maxAge: 25})
  
    // StoreModule.forFeature('personalDetails', personalDetailsReducer),    
    // EffectsModule.forFeature([PersonalDetailsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
