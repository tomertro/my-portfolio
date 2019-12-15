import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {
  Title = 'Welcome To My Page'
  constructor() { }

  ngOnInit() {
  }

}
