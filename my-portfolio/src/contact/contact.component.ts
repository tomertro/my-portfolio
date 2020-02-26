
import { Contact } from './../models/contact';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ContactState } from './store/contact.reducers';
import { Store } from '@ngrx/store';
import { AddContact, AddContactSuccess, AddContactFailed, ADD_CONTACT_FAILED, ADD_CONTACT, ADD_CONTACT_SUCCESS } from './store/contact.actions';
import { contactSelector } from './store/contact.selector';
import { Subscription } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { Form } from '@angular/forms';
import { ModalComponent } from 'src/modal/modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() f:Form;
  @ViewChild('contactModal',{ static: false }) modal :ModalComponent;

  Title = 'Contact' 
  modalTitle = 'Contact'
  modalContent:string;

  contact:Contact ;
  private subscriptions: Array<Subscription> = [];
  constructor(private contactStore:Store<ContactState>,private actions$: Actions) { 
    this.contact = new Contact();
    
  }

  ngOnInit() {
    //const contact$ = this.contactStore.select(contactSelector);
    this.subscriptions.push(this.actions$.pipe(ofType(ADD_CONTACT_SUCCESS)).subscribe(
      ()=>{
        this.openModal('Thank You for contacting. I will review the request, my resume will be sent if rellevant.');
      }
    ));
   
    this.subscriptions.push(this.actions$.pipe(ofType(ADD_CONTACT_FAILED)).subscribe(
      ()=>{
        debugger;
        this.openModal('Sorry.System error occured.');
      }
    ));
  }
  onSubmit():void{
    console.log('submit')
    console.log(JSON.stringify( this.contact))
    this.contactStore.dispatch(new AddContact( this.contact));    
  }

  openModal(content:string):void {   
     this.modalContent = content;
     this.modal.openModel();    
  }
}
