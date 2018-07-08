import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  @HostBinding('class.border-primary') private isHovering: boolean;

  @Input('ccCardHover') config: any = {
    // DN: this is just a default value, the configured value is specified
    //     in Host Component template.
    querySelector: '.card-text'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer)
  {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');

    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');

    this.isHovering = false;
  }
}
