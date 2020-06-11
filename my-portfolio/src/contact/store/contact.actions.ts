import {  Action } from '@ngrx/store';
import { Contact } from 'src/models/contact';

export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_CONTACT_SUCCESS = "ADD_CONTACT_SUCCESS";
export const ADD_CONTACT_FAILED = "ADD_CONTACT_FAILED";
export const MAIL_SENT_SUCCESS = "MAIL_SENT_SUCCESS";
export const MAIL_SENT_FAILED = "MAIL_SENT_FAILED";


export class AddContact implements Action{
     readonly type =  ADD_CONTACT;
  constructor(public payload:Contact){
  }
}

export class AddContactFailed implements Action{
    readonly type =  ADD_CONTACT_FAILED;
}

export class AddContactSuccess implements Action{
    readonly type =  ADD_CONTACT_SUCCESS;
    constructor(public payload:string){}
}

export class MailSentSuccess implements Action{
    readonly type =  MAIL_SENT_SUCCESS;
}
export class MailSentFailed implements Action{
    readonly type =  MAIL_SENT_FAILED;
}
export type ContactActions = AddContact | AddContactFailed | AddContactSuccess|MailSentSuccess;