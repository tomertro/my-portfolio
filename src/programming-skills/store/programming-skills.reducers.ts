import { PersonalDeatiles } from "src/models/personal-details.model";



import { ApplicationStateModel } from "src/models/application-state.model";
import { cloneDeep } from 'lodash';
import { ProgrammingSkills } from "src/models/programming-skills.model";
import { PersonalDetailsState } from "src/personal-details/store/personal-details.reducers";
import { LOAD_PROGRAMMING_SKILLS, LOAD_PROGRAMMING_SKILLS_SUCCESS, LOAD_PROGRAMMING_SKILLS_Fail, AllSkillsActions } from "./programming-skills.actions";

export class ProgrammingSkillsState  {
    skills: ProgrammingSkills;
}

//const initialState: ProgrammingSkillsState = {skills: {Name:'',Title:'',Image:'',About:'',Skills:['']}};
//const initialState: PersonalDetailsState = new PersonalDetailsState();
export function programmingSkillsReducer(state: ProgrammingSkillsState  , action: AllSkillsActions): ProgrammingSkillsState {
    switch (action.type) {
        case LOAD_PROGRAMMING_SKILLS:            
            return state ;
        case LOAD_PROGRAMMING_SKILLS_SUCCESS:
            {           
            return  {...state,skills:action.payload}
        };
           // return new PersonalDetailsState({...state,details:cloneDeep(action.payload)});
            
        case LOAD_PROGRAMMING_SKILLS_Fail:
            {                
                console.log('Fail to load');
                return undefined;

            }
            default:
                return state;

    }
}