import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  data: Date = new Date();
  @Input() img:string = "";
  @Input() titulo:string = "";
  @Input() texto:string = "";
  @Input() id:string = "0"
  
  constructor(){
    console.log(this.data)
  }
  

}
