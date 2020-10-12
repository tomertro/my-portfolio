
import { Action } from '@ngrx/store';
import { PersonalDeatiles } from 'src/models/personal-details.model';
import { ProgrammingSkills } from 'src/models/programming-skills.model';

export const  LOAD_PROGRAMMING_SKILLS = 'LOAD_PROGRAMMING_SKILLS';
export const  LOAD_PROGRAMMING_SKILLS_SUCCESS = 'LOAD_PROGRAMMING_SKILLS_SUCCESS';
export const  LOAD_PROGRAMMING_SKILLS_Fail = 'LOAD_PROGRAMMING_SKILLS_FAIL';

export class LoadProgrammingSkills implements Action{
   readonly type = LOAD_PROGRAMMING_SKILLS;
   constructor() { }

}

export class LoadProgrammingSkillsSuccess implements Action{
    readonly type = LOAD_PROGRAMMING_SKILLS_SUCCESS;
    constructor(public payload:ProgrammingSkills){  
    }
}
export class LoadProgrammingSkillsFail implements Action{
    readonly type = LOAD_PROGRAMMING_SKILLS_Fail;
}
export type AllSkillsActions = LoadProgrammingSkills | LoadProgrammingSkillsSuccess|LoadProgrammingSkillsFail;