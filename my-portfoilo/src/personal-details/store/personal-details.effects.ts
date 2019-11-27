import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from "@angular/core";
import { PersonalDetailsService } from "../personal-details.service";
import { Actions,ofType, Effect, } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import { LoadPersonalDetails, LoadPersonalDetailsSuccess, LoadPersonalDetailsFail, LOAD_PERSONAL_DETAILS } from "./personal-details.actions";
import { of, Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

@Injectable()
export class PersonalDetailsEffects{


@Effect() 
loadPersonalDetils$ : Observable<any> = this.actions$.pipe(ofType(LOAD_PERSONAL_DETAILS),
switchMap(()=> this.service.getPersonalDetails().pipe(map((pd:PersonalDeatiles)=> new LoadPersonalDetailsSuccess(pd)),
catchError(error => {
    return of(new LoadPersonalDetailsFail());
  })
)
));

constructor(private actions$:Actions ,private service:PersonalDetailsService){}
};
