import { map, catchError } from 'rxjs/operators';
import { Contact } from './../models/contact';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private readonly _baseUrl = environment.serverUrl;

  SaveContact(contact: Contact): Observable<any> {
    console.log('Save Contact:' + JSON.stringify(contact));
    const body = JSON.stringify(contact);
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const api = this._baseUrl + 'contact'
    //const api = "contact";
    //const api =  '/sendmail'    
    return this.http.put(api, body,{headers}) 

  }

  EmailContact(contactId: string): Observable<any> {
    //  const body = contactId;
    const headers = { 'Content-Type': 'application/json' };
      const body = new HttpParams()
   .set('ContactID', contactId); 
    

    const api = this._baseUrl + 'sendmail'
    //const api = 'api/sendmail'
    return this.http.post(api, body)

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