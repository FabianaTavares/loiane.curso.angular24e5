import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.css'],
})
export class CampoControlErrorComponent implements OnInit {
  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() { }
}
