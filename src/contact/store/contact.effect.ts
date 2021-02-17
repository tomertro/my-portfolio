import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Contact } from './../../models/contact';
import { mergeMap, map, switchMap, catchError, exhaustMap, filter } from 'rxjs/operators';

import { ContactService } from './../contact.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';


import { Observable, of } from 'rxjs';


import * as contactActions from './contact.actions';
import { error } from 'protractor';
import { ADD_CONTACT, AddContactSuccess } from './contact.actions';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class ContactEffects {

  constructor(private actions$: Actions, private contactService: ContactService) {
  }

    addContact$: Observable<any> = createEffect(()=>this.actions$.pipe( 
      //exhaustMap situations where what we want to do is to ignore
      //new values in the source Observable until the previous value is
      //completely processed
      ofType<contactActions.AddContact>(ADD_CONTACT),exhaustMap(
        (c:contactActions.AddContact)=>{
          console.log('Effect Add Contact')
         return this.contactService.SaveContact(c.payload).pipe(mergeMap(res=>{
           return [new contactActions.AddContactSuccess(res.id)] 
         }),
        catchError((error:HttpErrorResponse) => {   
          debugger;        
           console.log('error addContact effect error:' + JSON.stringify(error) )
           if(error.statusText === 'Unknown Error' && environment.isOffline)
              return [new contactActions.AddContactSuccess('fake id')] 
           else
              return of(new contactActions.AddContactFailed());
        }) 
         )
        })
      ));

      mailContact$:Observable<any> = createEffect(
        ()=>
        this.actions$.pipe(filter(res=>{
          if(environment.isOffline)
          return false;
          else
          return true;
        }),
        ofType<AddContactSuccess>(contactActions.ADD_CONTACT_SUCCESS),
        switchMap((act:AddContactSuccess)=> 
        this.contactService.EmailContact(act.payload).pipe(
          mergeMap(res=>{return [new contactActions.MailSentSuccess()]}  )
        //todo return action of mail sent
        //add 
        , catchError((error:HttpErrorResponse) => {
          debugger;
          console.log('error addContact effect error:' + JSON.stringify(error) )        
          return of(new contactActions.MailSentFailed());
       })
      )

        )

        )//main pipe
        );


 
}
