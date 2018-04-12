import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: string = 'http://loiane.com';
cursoAngular: boolean = true;
urlImagem = "http://prmurphy.com.au/wp-content/uploads/2015/10/pexels-photo-236047.jpg";

ValorAtual: string = '';
ValorSalvo = '';

isMouseOver: boolean = false;

nome: string = 'abc';

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

getValor() {
  return 1;
}

getCurtirCurso(){
  return true;
}

botaoClicado(){
  alert('Botao Clicado')
}

onKeyUp(evento: KeyboardEvent){
  this.ValorAtual = (<HTMLInputElement>evento.target).value;
}

salvarValor(valor){
  this.ValorSalvo = valor;
}

onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
}

onMudouValor(evento){
  console.log(evento.novoValor);
}

  constructor() { }

  ngOnInit() {
  }

}
