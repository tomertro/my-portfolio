import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('myModal',{ static: false }) modal :ElementRef;
  @Input('title')title:string 
  @Input('content') content:string 
  isOpen:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openModel() {
    this.isOpen = true;

}
closeModel() {
  this.isOpen = false;
}

}
