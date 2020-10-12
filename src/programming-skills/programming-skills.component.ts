import { Component, OnInit } from '@angular/core';
import { ProgrammingSkillsState } from './store/programming-skills.reducers';
import { Store } from '@ngrx/store';
import { LoadProgrammingSkills } from './store/programming-skills.actions';
import { programmingSkillsSelector } from './store/programming-skills.selectors';
import { Observable } from 'rxjs';
import { ProgrammingSkills } from 'src/models/programming-skills.model';

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrls: ['./programming-skills.component.css']
})
export class ProgrammingSkillsComponent implements OnInit {

  skills$:Observable<ProgrammingSkills>;
  constructor(private store:Store<ProgrammingSkillsState>) { }
    
  ngOnInit() {
    this.store.dispatch(new LoadProgrammingSkills())
    this.skills$ = this.store.select(programmingSkillsSelector);
  }

}
