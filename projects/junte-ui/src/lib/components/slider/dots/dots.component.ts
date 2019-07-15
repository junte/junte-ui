import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jnt-slider-carousel-dots',
  templateUrl: './dots.encapsulated.html'
})

export class SliderCarouselDotsComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-slider-carousel-dots-host';

  numbers: Array<number>;

  @Input('active-dot') activeDot: number = 0;
  @Input('dots-count') dotsCount: number;

  @HostBinding('class')
  @Input() position: string = 'middle';

  @Output('on-click') onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.numbers = Array(this.dotsCount).fill(0).map((x, i) => i);
  }

  click(index: any) {
    this.onClick.emit(index);
    this.activeDot = index;
  }
}
