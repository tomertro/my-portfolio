import { LoadPersonalDetails, LoadPersonalDetailsSuccess } from './store/personal-details.actions';
import { PersonalDetailsState } from './store/personal-details.reducers';
import { Component, OnInit } from '@angular/core';
import { personalDetailsSelector } from './store/personal-details.selectors';
import { Store } from '@ngrx/store';
import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  subscribers: Array<Subscription> = [];
  personalDetails$:Observable<PersonalDeatiles>;
  personalDetails: PersonalDeatiles;
  constructor(private store:Store<PersonalDetailsState>) { 
    this.loadPersonalDetails();
    this.personalDetails$ = this.store.select(personalDetailsSelector);
    this.personalDetails$.subscribe(result =>{
      debugger;
            this.personalDetails = result;
            console.log('personalDetails: ' + JSON.stringify(this.personalDetails));
          },error=>{
            debugger;
            console.log('error on subscribing.'+error)
          });
  }

  ngOnInit() {
  
    /* this.subscribers.push(
    this.store.select(state=>state.details).subscribe(result =>{
debugger;
      this.personalDetails = result;
      console.log('personalDetails:'+this.personalDetails)
    } )); */
  }

  loadPersonalDetails(){
    this.store.dispatch(new LoadPersonalDetails());
    
  }
  ngOnDestroy(): void {
    this.subscribers.forEach(s => s.unsubscribe());
    this.subscribers = [];
    // this.patientConfidentialityRestrictionService.isAllReqSuccess.emit(false);
  }
}
