import { Component, OnInit, Input } from '@angular/core';
import { Resume } from 'src/models/resume.model';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.css']
})
export class JobExperienceComponent implements OnInit {

  @Input() jobExperience:Resume;
  constructor() { }

  ngOnInit() {
  }

 

}
