import { PersonalDeatiles } from "src/models/personal-details.model";

import {  LOAD_PERSONAL_DETAILS, LOAD_PERSONAL_DETAILS_SUCCESS, All, Load_Personal_Details_Fail } from "./personal-details.actions";

import { ApplicationStateModel } from "src/models/application-state.model";
import { cloneDeep } from 'lodash';

export class PersonalDetailsState extends ApplicationStateModel<PersonalDetailsState> {
    details: PersonalDeatiles;
}

const initialState: PersonalDetailsState = new PersonalDetailsState({});

export function personalDetailsReducer(state: PersonalDetailsState = initialState, action: All): PersonalDetailsState {
    switch (action.type) {
        case LOAD_PERSONAL_DETAILS:
            debugger;
            return new PersonalDetailsState({...state,details:undefined});
        case LOAD_PERSONAL_DETAILS_SUCCESS:
            debugger;
            return state = {details : action.payload};
            
            
        case Load_Personal_Details_Fail:
            {
                debugger;
                console.log('Fail to load');
                return undefined;

            }

    }
}