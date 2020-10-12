import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProgrammingSkillsState } from "./programming-skills.reducers";

export const programmingSkillsFeatureSelector  = createFeatureSelector<ProgrammingSkillsState>('programmingSkills');
export const programmingSkillsSelector = createSelector(programmingSkillsFeatureSelector,(state: ProgrammingSkillsState) => state ? state.skills : undefined);