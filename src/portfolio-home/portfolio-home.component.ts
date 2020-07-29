import { Component, OnInit, Input } from '@angular/core';
import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Subscription } from 'rxjs';
import { PersonalDetailsState } from 'src/personal-details/store/personal-details.reducers';
import { Store } from '@ngrx/store';
import { personalDetailsSelector } from 'src/personal-details/store/personal-details.selectors';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})

export class PortfolioHomeComponent implements OnInit {
  personalDetails: PersonalDeatiles ;
  private subscriptions: Array<Subscription> = [];
  Title = 'Welcome To My Page'
  about:string;
  constructor(private store:Store<PersonalDetailsState>) { }

  ngOnInit() {
       
    this.subscriptions.push(this.store.select(personalDetailsSelector).subscribe(result =>{      
            this.personalDetails = result;
            this.about = this.personalDetails.About.
            replace(new RegExp('\n', 'g'), "<br />")
            ;
           
          },error=>{           
            console.log('error on subscribing.'+error)
          }));  
  }

}
