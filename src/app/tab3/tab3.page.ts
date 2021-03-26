import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  Type:String;


  constructor() {}

  ngOnInit(){
    this.Type="temp";
  }
  segmentChanged(event:any){

  }
}
