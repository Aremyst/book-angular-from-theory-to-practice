import {Component, ContentChildren, Input, AfterContentInit, QueryList} from '@angular/core';
import {CarouselItemComponent} from "../carousel-item/carousel-item.component";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {

  @Input() delay: number;

  @ContentChildren(CarouselItemComponent) carouselItems : QueryList<CarouselItemComponent>;

  constructor() { }

  ngAfterContentInit() {
    // Get instances to all CarouselItemComponent-s, which are Content-Projected from AppComponent.
    let carouselListItems: CarouselItemComponent[] = this.carouselItems.toArray();

    // Activate first CarouselItem.
    let activeCarouselItemIndex = 0;

    if (carouselListItems.length > 0) {
      carouselListItems[activeCarouselItemIndex].isActive = true;

      // Start interval, which activates next CarouselItem with specified delay.
      setInterval(function() {
        carouselListItems[activeCarouselItemIndex].isActive = false;

        activeCarouselItemIndex++;
        if (activeCarouselItemIndex >= carouselListItems.length) {
          activeCarouselItemIndex = 0;
        }
        carouselListItems[activeCarouselItemIndex].isActive = true;
      }, this.delay);
    }



  }

}
