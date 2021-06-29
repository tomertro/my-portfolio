import { environment } from './../environments/environment';

import { Contact } from './../models/contact';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ContactState } from './store/contact.reducers';
import { Store } from '@ngrx/store';
import { AddContact, AddContactSuccess, AddContactFailed, ADD_CONTACT_FAILED, ADD_CONTACT, ADD_CONTACT_SUCCESS, MAIL_SENT_FAILED } from './store/contact.actions';
import { contactSelector } from './store/contact.selector';
import { Observable, Subscription } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Form } from '@angular/forms';
import { ModalComponent } from 'src/modal/modal.component';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit ,CanComponentDeactivate{
  @Input() f:Form;
  @ViewChild('contactModal',{ static: false }) modal :ModalComponent;

  Title = 'Contact' 
  modalTitle = 'Contact'
  modalContent:string;
 
  contact:Contact ;
  changedSaved = false;
  private subscriptions: Array<Subscription> = [];

  constructor(private contactStore:Store<ContactState>,private actions$: Actions,private router:Router) { 
    this.contact = new Contact();
    
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{   
    debugger; 
    if(!this.changedSaved && (this.contact.firstName != undefined || this.contact.lastName != undefined || this.contact.email != undefined ) )
    {
      return confirm('Do you want discard changes?')      
    }    
      
    return true;
  }
  

  ngOnInit() {
    //const contact$ = this.contactStore.select(contactSelector);
    this.subscriptions.push(this.actions$.pipe(ofType(ADD_CONTACT_SUCCESS)).subscribe(
      ()=>{
        if(environment.isOffline)
          this.openModal('The site is in offline mode. Please conatcat me via email: tomert@hotmail.com');
        else
          this.openModal('Thank You for contacting. I will review the request, my resume will be sent if rellevant.');
      }
    ));
   
    this.subscriptions.push(this.actions$.pipe(ofType(ADD_CONTACT_FAILED)).subscribe(
      ()=>{       
        this.openModal('Sorry.System error occured.');
      }
    ));
    this.subscriptions.push(this.actions$.pipe(ofType(MAIL_SENT_FAILED)).subscribe(
      ()=>{        
        this.openModal('Sorry.System error occured.Please conatcat me via email: tomert@hotmail.com');
      }
    ));
  }
  onSubmit():void{
    console.log('submit')
    console.log(JSON.stringify( this.contact))
    this.contactStore.dispatch(new AddContact( this.contact));    
    this.changedSaved = true;
  }

  openModal(content:string):void {   
     this.modalContent = content;
     this.modal.openModel();    
  }
}
