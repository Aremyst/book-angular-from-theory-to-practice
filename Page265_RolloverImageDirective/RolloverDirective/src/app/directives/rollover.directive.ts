import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: "img[ccRollover]"
})
export class RolloverImageDirective {
  @Input('ccRollover') config: any = {
    initial: 'dummyImagePath',
    over: 'dummyImagePath'
  };

  constructor(private el: ElementRef,
              private renderer: Renderer)
  {
  }

  ngAfterViewInit() {
    console.log('on View Init');
    this.setInitialImage();
  }

  @HostListener('mouseover') onMouseOver() {
    this.setHoveredImage();
  }

  @HostListener('mouseout') onMouseOut() {
    this.setInitialImage();
  }

  private setHoveredImage() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.config.over);
  }

  private setInitialImage() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', this.config.initial);
  }


}
