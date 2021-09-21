import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logInStatus = new EventEmitter();
  @Output() logInStatusTrue = new EventEmitter();
  // new EventEmitter<{name:string, age:number}>();
  

  login:boolean=false;
  loginPermission:boolean=false;

  constructor() {   }

  ngOnInit(): void {  
    console.log(this.login + "anfang");
   
  } 

  logIn() {
    this.login = !this.login;
    this.logInStatus.emit(this.login);
    console.log(this.login + "ende");
  }

  logInYes(){
    this.loginPermission = true;
    this.logInStatusTrue.emit(this.loginPermission);
  }
}
