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

getValor() {
  return 1;
}

getCurtirCurso(){
  return true;
}

  constructor() { }

  ngOnInit() {
  }

}
