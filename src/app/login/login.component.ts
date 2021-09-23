import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logInStatus = new EventEmitter();
  @Output() logInStatusTrue = new EventEmitter();
  // new EventEmitter<{name:string, age:number}>();
  //@Input() logOutstatus:boolean;
  

  login:boolean=false;
  loginPermission:boolean=false;

  constructor() {   }

  ngOnInit(): void {    } 

  logIn() {
    this.login = !this.login;
    this.logInStatus.emit(this.login);
    // console.log(this.login + "ende");
  }

  logInYes(){
    this.loginPermission = true;
    this.logInStatusTrue.emit(this.loginPermission);
    this.login = !this.login;
  }
}
