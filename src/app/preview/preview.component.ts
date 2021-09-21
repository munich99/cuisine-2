import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  title = 'Speise 1';
  @Input() Dailies:any // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
    console.log(this.Dailies);
  }

}
