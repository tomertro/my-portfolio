import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from "@angular/core";
import { Actions,ofType, Effect, createEffect, } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ProgrammingSkillsService } from '../programming-skills.service';
import { LOAD_PROGRAMMING_SKILLS, LoadProgrammingSkillsSuccess, LoadProgrammingSkillsFail } from './programming-skills.actions';
import { ProgrammingSkills } from 'src/models/programming-skills.model';


@Injectable()
export class ProgrammingSkillsEffects{

  loadSkills$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_PROGRAMMING_SKILLS),
    mergeMap(() => this.service.getSkills()
      .pipe(
        map((skills:ProgrammingSkills) => {  
          console.log('loadPersonalDeatile effect')       
          return new LoadProgrammingSkillsSuccess(skills );
        }
        ,
        catchError(error => {
          return of(new LoadProgrammingSkillsFail());
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
constructor(private actions$:Actions ,private service:ProgrammingSkillsService){}
};
