import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  Type:String;


  Data: Observable<any>;
  temp = 0 ;
  rate = 0 ;


  constructor( public httpClient: HttpClient) {
    setInterval(()=>{
      this.Data = this.httpClient.get('http://192.168.43.37:5000/skin');
    this.Data
    .subscribe(data => {
     this.temp =data ;

    })
    },5000)

  }

  ngOnInit(){
    this.Type="temp";
  }
  segmentChanged(event:any){

  }
}
