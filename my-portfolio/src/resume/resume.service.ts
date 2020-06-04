import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from 'src/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  getResume():Observable<Array<Resume>>{
    debugger;
    const result = this.http.get<Array<Resume>>(`assets/resume.json`);
    return result;
  }


}
