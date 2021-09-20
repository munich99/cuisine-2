import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {

  todayDate = new Date();
  tomorrow =  this.todayDate.getDate()+2;
  weekday =  this.todayDate.getDay();

  constructor() { }

  ngOnInit(): void {
  }

}
