import { ContactState } from "./contact.reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const contactFeatureSelector = createFeatureSelector<ContactState>('ContactState')
export const contactSelector = createSelector(contactFeatureSelector,(state:ContactState)=>state? state.contact: undefined)