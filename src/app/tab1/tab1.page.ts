import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  Data: Observable<any>;
  temp = 0 ;
  hum = 0 ;
  Type: String ;

  constructor( public httpClient: HttpClient) {
    setInterval(()=>{
      this.Data = this.httpClient.get('http://192.168.43.37:5000/DHT');
    this.Data
    .subscribe(data => {
     this.temp = ~~data.temp ;
     this.hum = ~~data.hum;
    })
    },20000)

  }
  ngOnInit(){
    this.Type = "temp"
  }

  segmentChanged(ev:any){
    console.log('Segment changed', ev);
  }
}
