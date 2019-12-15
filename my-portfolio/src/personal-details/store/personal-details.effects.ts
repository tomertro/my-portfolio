import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from "@angular/core";
import { PersonalDetailsService } from "../personal-details.service";
import { Actions,ofType, Effect, createEffect, } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {  LoadPersonalDetailsSuccess, LoadPersonalDetailsFail, LOAD_PERSONAL_DETAILS } from "./personal-details.actions";
import { of, Observable } from 'rxjs';


@Injectable()
export class PersonalDetailsEffects{

  loadPersonalDeatile$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PERSONAL_DETAILS),
    mergeMap(() => this.service.getPersonalDetails()
      .pipe(
        map((pd:PersonalDeatiles) => {  
          console.log('loadPersonalDeatile effect')       
          return new LoadPersonalDetailsSuccess(pd );
        }
        ,
        catchError(error => {
          return of(new LoadPersonalDetailsFail());
        })
      ))
    )
  ));
  
  //https://medium.com/@vdsabev/the-simple-difference-between-rxjs-switchmap-and-mergemap-397c311552a5
  
/* @Effect() 
 loadPersonalDetils$ : Observable<any> = this.actions$.pipe(ofType(LOAD_PERSONAL_DETAILS),
switchMap(()=> this.service.getPersonalDetails().pipe(
  map((pd:PersonalDeatiles)=> {      
      new LoadPersonalDetailsSuccess(pd)}
    ),
catchError(error => {
    return of(new LoadPersonalDetailsFail());
  })
)
)); 
 */
/* loadHostedAppslist$: Observable<any> = this.actions$.pipe(
  ofType(HostedAppsActions.LOAD_HOSTED_APPLICATIONS),
  switchMap(() =>
    this.hostedAppsService.loadHostedApplicationsList().pipe(
      map((apps: Array<HostedApplication>) => new HostedAppsActions.LoadHostedApplicationsSuccess(apps)),
      catchError(error => {
        return of(new HostedAppsActions.LoadHostedApplicationsFail());
      })
    )
  )
); */
constructor(private actions$:Actions ,private service:PersonalDetailsService){}
};
