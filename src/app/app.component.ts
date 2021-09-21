import { Component } from '@angular/core';
import { Daily } from './daily'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unsere Tageskarte';

  dailies : Daily[] =[{
    menue: 'Ma-Po Tofu mit Hühnerhackfleisch',
    preis: 6.9
    }, 
    {
    menue: 'Gekochtes Fischfilet (scharf)',
    preis: 7.5,
    },
    {
    menue: 'Acht Schätze',
    preis: 8.5,
    },
    {
    menue: 'Hühnerfleisch m. schwarzen Bohnen + Gemüse',
    preis: 7.9,
    },
    {
    menue: 'Bärlauchtasche',
    preis: 3,
  }];

  choicies : Daily[] =[];

  preview : boolean = true;

  login: boolean = false;

  deleteDaily(daily:Daily) : void{
    this.dailies = this.dailies.filter( a => a != daily)
  }

  putDaily(daily:Daily) {
    this.choicies.push(daily);
    this.deleteDaily(daily);      
  }

  removeDaily(choice:Daily) {
    this.choicies = this.choicies.filter( a => a != choice);
    this.dailies.push(choice);
   // this.deleteDaily(daily);
  }



  loginMessage(messageFromLogin: boolean) {
    console.log(messageFromLogin+ "11");
    this.preview = messageFromLogin;
    
    //call service/api to post message
  }
  loginMessageXX(messageFromLogin: boolean) {
    console.log(messageFromLogin+ "12");
    this.login = messageFromLogin; 
    
    //call service/api to post message
  }
}
