import { Contact } from '../../models/contact';
import { ContactActions, ADD_CONTACT, ADD_CONTACT_FAILED, ADD_CONTACT_SUCCESS } from './contact.actions';

export class ContactState{
 contact : Contact;
}

const intinialState: ContactState = new ContactState(); 

export function contactReducer (state:ContactState = intinialState ,action : ContactActions) : ContactState{
    switch(action.type){
        case ADD_CONTACT:{
            console.log('contact reducer');           
            action.payload._id = undefined
            return  {...state,contact : action.payload}
        }
        case ADD_CONTACT_FAILED:{
            return intinialState;
        }
        case ADD_CONTACT_SUCCESS:{
            state.contact._id = action.payload;
            return {...state}
           // return {...state.contact._id : action.payload} 
        }
    }
}