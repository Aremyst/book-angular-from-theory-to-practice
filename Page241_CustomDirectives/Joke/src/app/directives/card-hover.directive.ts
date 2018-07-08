import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "gray";
  }
}
