import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Resume } from 'src/models/resume.model';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  resume:Observable<Array<Resume>>;
  Title = 'My Resume' 
  constructor(private resumeService:ResumeService) { }

  ngOnInit() {
    this.resume = this.resumeService.getResume();
  }

}
