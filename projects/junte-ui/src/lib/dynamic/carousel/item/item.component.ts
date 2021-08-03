import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'jnt-carousel-item',
  templateUrl: './item.component.html'
})
export class CarouselItemComponent {
  @ViewChild('carouselItemTemplate')
  content: TemplateRef<any>;
}
