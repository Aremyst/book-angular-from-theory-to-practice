import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: "img[ccRollover]"
})
export class RolloverImageDirective {
  @Input('ccRollover') config: any = {
    initial: 'dummyImagePath',
    over: 'dummyImagePath'
  };

  @HostBinding('src') private imagePath: string;

  // ngOnInit and not ngAfterViewInit, because if we change parent property from child directive after DOM update operation,
  // we'll get "ExpressionChangedAfterItHasBeenCheckedError".
  // Details: https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  ngOnInit() {
    console.log('[H] ngOnInit');
    this.setInitialImage();
  }

  @HostListener('mouseover') onMouseOver() {
    this.setHoveredImage();
  }

  @HostListener('mouseout') onMouseOut() {
    this.setInitialImage();
  }

  private setHoveredImage() {
    this.imagePath = this.config.over;
  }

  private setInitialImage() {
    this.imagePath = this.config.initial;
  }


}
