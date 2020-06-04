import { LoadPersonalDetails, LoadPersonalDetailsSuccess } from './store/personal-details.actions';
import { PersonalDetailsState } from './store/personal-details.reducers';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { personalDetailsSelector } from './store/personal-details.selectors';
import { Store } from '@ngrx/store';
import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit,OnDestroy {
 
  personalDetails$:Observable<PersonalDeatiles>;
  personalDetails: PersonalDeatiles ;
  private subscriptions: Array<Subscription> = [];
  constructor(private store:Store<PersonalDetailsState>) { 
  
  }

  ngOnInit() {
  
    this.loadPersonalDetails();
    this.personalDetails$ = this.store.select(personalDetailsSelector);
    
    this.subscriptions.push(this.personalDetails$.subscribe(result =>{      
            this.personalDetails = result;
            console.log('personalDetails: ' + JSON.stringify(this.personalDetails));
          },error=>{           
            console.log('error on subscribing.'+error)
          }));  
  }

  loadPersonalDetails(){
    this.store.dispatch(new LoadPersonalDetails());
    
  }
  ngOnDestroy(): void {
    //https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
    
  }
}
