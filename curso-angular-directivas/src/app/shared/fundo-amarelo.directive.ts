import { Directive, ElementRef } from '@angular/core';

@Directive({ // decorator @directive
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  /*Injeção de dependencia */
  constructor(private _elementRef: ElementRef) {
   // console.log(this._elementRef)
   this._elementRef.nativeElement.style.backgroundColor = 'yellow';
   }

}
