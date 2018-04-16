import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Livro de Java',
    preco: 50,
    numeroPaginas: 314,
    rating: 4.321,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://loiane.training'
  } 

  constructor() { }

  ngOnInit() {
  }

}
