import { PersonalDeatiles } from "src/models/personal-details.model";

import {  LOAD_PERSONAL_DETAILS, LOAD_PERSONAL_DETAILS_SUCCESS, All, Load_Personal_Details_Fail } from "./personal-details.actions";

import { ApplicationStateModel } from "src/models/application-state.model";
import { cloneDeep } from 'lodash';

export class PersonalDetailsState  {
    details: PersonalDeatiles;
}

const initialState: PersonalDetailsState = {details: {Name:'',Title:'',Image:'',About:'',Skills:['']}};
//const initialState: PersonalDetailsState = new PersonalDetailsState();
export function personalDetailsReducer(state: PersonalDetailsState = initialState, action: All): PersonalDetailsState {
    switch (action.type) {
        case LOAD_PERSONAL_DETAILS:            
            return state ;
        case LOAD_PERSONAL_DETAILS_SUCCESS:
            {           
            return  {...state,details:action.payload}
        };
           // return new PersonalDetailsState({...state,details:cloneDeep(action.payload)});
            
        case Load_Personal_Details_Fail:
            {                
                console.log('Fail to load');
                return undefined;

            }
            default:
                return state;

    }
}