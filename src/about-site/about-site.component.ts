import { AboutSite } from './../models/about-site.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AboutSiteService } from './about-site.service';

@Component({
  selector: 'app-about-site',
  templateUrl: './about-site.component.html',
  styleUrls: ['./about-site.component.css']
})
export class AboutSiteComponent implements OnInit {

  title = 'Site Design And Architecture'
  aboutSite:AboutSite
  constructor(private service:AboutSiteService) {
   
   }

  ngOnInit() {
    this.service.aboutSite.subscribe(
      res=>{        
        this.aboutSite = res
      }
      
      );
  }

}
