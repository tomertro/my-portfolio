import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalDetailsState } from "./personal-details.reducers";

export const personalDetailsFeatureSelector = createFeatureSelector<PersonalDetailsState>('personalDetails');
export const personalDetailsSelector = createSelector(personalDetailsFeatureSelector,(state: PersonalDetailsState) => state ? state.details : undefined);