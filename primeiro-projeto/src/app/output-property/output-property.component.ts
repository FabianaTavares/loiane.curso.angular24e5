import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  incrementa(){
    this.valor++;
  }
  
  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
