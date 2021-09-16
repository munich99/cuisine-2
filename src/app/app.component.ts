import { Component } from '@angular/core';
import { Daily } from './daily'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuisine';


  dailies : Daily[] =[{
    menue: 'Ma-Po Tofu mit Hühnerhackfleisch',
    preis: 8.5},
    {
    menue: 'Bärlauchtasche',
    preis: 3,
  }];

  choicies : Daily[] =[];

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
}
