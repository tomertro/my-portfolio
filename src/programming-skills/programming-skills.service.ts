import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProgrammingSkills } from 'src/models/programming-skills.model';



// The @Injectable() decorator marks it as a service that can be injected, 
//but Angular can't actually inject it anywhere until you configure an Angular dependency 
//injector with a provider of that service
@Injectable({
    // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class ProgrammingSkillsService {
  constructor(private appService:ApplicationService,private http: HttpClient) { }

  getSkills(): Observable<ProgrammingSkills>{    
    const result = this.http.get<ProgrammingSkills>(`assets/ProgrammingTechnologies.json`);
    return result;
       
  }

}