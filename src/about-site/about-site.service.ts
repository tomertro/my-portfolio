import { HttpClient } from '@angular/common/http';
import { AboutSite } from './../models/about-site.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutSiteService {
 
  private subject = new BehaviorSubject<AboutSite>(new AboutSite());
  aboutSite:Observable<AboutSite>;
  constructor(private client:HttpClient) {
    this.aboutSite = this.subject.asObservable();
    this.setAboutSite();
   }
   setAboutSite(){
     const result = this.client.get<AboutSite>(`assets/AboutSite.json`);
     result.subscribe(res=>{
       this.subject.next(res);
     })
   }
}
