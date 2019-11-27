import { PersonalDeatiles } from "src/models/personal-details.model";
import { Action } from "rxjs/internal/scheduler/Action";
import {  LOAD_PERSONAL_DETAILS, LOAD_PERSONAL_DETAILS_SUCCESS, All } from "./personal-details.actions";
import { ActionsSubject } from "@ngrx/store";


export class PersonalDetailsState {
    details: PersonalDeatiles;
}

const initialState: PersonalDetailsState = new PersonalDetailsState();

export function personalDetailsReducer(state: PersonalDetailsState = initialState, action: All): PersonalDetailsState {
    switch (action.type) {

        case LOAD_PERSONAL_DETAILS_SUCCESS:
            return state = { details: action.payload };

    }
}