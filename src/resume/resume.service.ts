import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from 'src/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumeSubject = new BehaviorSubject<Array<Resume>>([]);
  public resumeObeservable :  Observable<Array<Resume>>;
  constructor(private http: HttpClient) { 
    this.resumeObeservable = this.resumeSubject.asObservable();
    this.getResume();
  }
  
  private getResume(){    
    const result = this.http.get<Array<Resume>>(`assets/resume.json`);
    result.subscribe(res=>{
      this.resumeSubject.next(res);
    })
    
    return result;
  }


}
