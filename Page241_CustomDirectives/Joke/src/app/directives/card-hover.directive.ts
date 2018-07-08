import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer)
  {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none')
  }
}
