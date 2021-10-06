import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {

  todayDate = new Date();
  
  // tomorrow =  this.todayDate.getDate()+2;
  weekday =  this.todayDate.getDay();
  startDay = new Date().getDay();
  
  wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ];

 

  constructor() { }

  ngOnInit(): void {
  }

  // tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  
// new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

  nextDay(){
    
    if(this.weekday <6) {
      this.todayDate =  new Date(this.todayDate.setDate(this.todayDate.getDate() + 1))
      this.weekday =  this.weekday + 1;
      
      
    }
    // this.todayDate = this.todayDate + 1;
    
  }
  beforeDay(){

    
    if(this.weekday > this.startDay) {
      this.todayDate =  new Date(this.todayDate.setDate(this.todayDate.getDate() - 1))
      this.weekday =  this.weekday - 1;
      console.log("tt");
    }
  }

}
