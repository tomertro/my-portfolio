import { map, catchError } from 'rxjs/operators';
import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private readonly _baseUrl = environment.serverUrl;
  
   SaveContact(contact:Contact):Observable<any>{
     console.log('Save Contact:' + JSON.stringify(contact));
     const body = JSON.stringify(contact);
     const headers = {'Content-Type':'application/json'};
     const api = this._baseUrl + 'sendmail'
     //const api =  '/sendmail'
     debugger;
    return  this.http.post(api, body,  { headers })
    /* .pipe(map(response => response.toString),
    catchError(error=> this.errorHandler(error))); */
    

  
    }

   // return this.http.post(this.serverUrl, auditEvent, { headers: { 'Content-Type': 'application/json' } });
  errorHandler(error) {
    console.error('CUSTOM ERROR');
    return Observable.throw(error);
  }
}
/*
const headers = { ...context.Headers, 'Content-Type': 'application/json' };

      const body = JSON.stringify(context);

      return this.http.post<HostedApplicationState>(app.ContextExchangeApiUrl, body, { headers });

*/