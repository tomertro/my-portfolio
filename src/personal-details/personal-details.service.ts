import { PersonalDeatiles } from 'src/models/personal-details.model';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/application-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



// The @Injectable() decorator marks it as a service that can be injected, 
//but Angular can't actually inject it anywhere until you configure an Angular dependency 
//injector with a provider of that service
@Injectable({
    // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class PersonalDetailsService {
  private readonly _baseUrl = environment.serverUrl;
  private api = `assets/PersonalDetails.json`
  constructor(private http: HttpClient) { }

  getPersonalDetails(): Observable<PersonalDeatiles>{
    debugger

    if(!environment.isOffline)
      this.api = this._baseUrl + 'personalDetails'
    const result = this.http.get<PersonalDeatiles>(this.api);
    return result;
       
  }

}