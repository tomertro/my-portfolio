
import { Action } from '@ngrx/store';
import { PersonalDetailsState } from './personal-details.reducers';
import { PersonalDeatiles } from 'src/models/personal-details.model';

export const  LOAD_PERSONAL_DETAILS = 'LOAD_PERSONAL_DETAILS';
export const  LOAD_PERSONAL_DETAILS_SUCCESS = 'LOAD_PERSONAL_DETAILS_SUCCESS';
export const  Load_Personal_Details_Fail = 'LOAD_PERSONAL_DETAILS_FAIL';
export class LoadPersonalDetails implements Action{
   readonly type = LOAD_PERSONAL_DETAILS;
   constructor() { }

}

export class LoadPersonalDetailsSuccess implements Action{
    readonly type = LOAD_PERSONAL_DETAILS_SUCCESS;
    constructor(public payload:PersonalDeatiles){  
    }
}
export class LoadPersonalDetailsFail implements Action{
    readonly type = LOAD_PERSONAL_DETAILS;
}
export type All = LoadPersonalDetails | LoadPersonalDetailsSuccess;