import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { personalDetailsReducer } from 'src/personal-details/store/personal-details.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailsEffects } from 'src/personal-details/store/personal-details.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //StoreModule.forRoot({personalDetailsReducer}),
    StoreModule.forRoot({}),
    StoreModule.forRoot(personalDetailsReducer),
    EffectsModule.forRoot([PersonalDetailsEffects]),
    BrowserModule,
   
    // StoreModule.forFeature('personalDetails', personalDetailsReducer),    
    // EffectsModule.forFeature([PersonalDetailsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
