import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  logInStatus = new EventEmitter();

  test:boolean=false;

  constructor() {   }

  ngOnInit(): void {  
    console.log(this.test + "eeeee");
   
  } 



  logIn() {
    this.test = !this.test;
    this.logInStatus.emit(this.test);
  }




}
