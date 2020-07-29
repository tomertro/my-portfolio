
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEffects } from './store/contact.effect';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contactReducer } from './store/contact.reducers';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from 'src/modal/modal.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,       
    StoreModule.forFeature('contacts', contactReducer),
    EffectsModule.forFeature([ContactEffects]),
  ],
  
})
export class ContactModule { }
