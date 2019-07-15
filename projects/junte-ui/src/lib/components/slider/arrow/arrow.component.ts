import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jnt-slider-carousel-arrow',
  templateUrl: './arrow.encapsulated.html'
})

export class SliderCarouselArrowComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-slider-carousel-arrow-host';

  class = {left: false, right: false, disabled: true};

  @Input() dir: string;
  @Input('disabled') disabled: boolean = true;
  @Output('on-click') click: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }

  ngOnInit() {
    this.class = {
      left: this.dir === 'left',
      right: this.dir === 'right',
      disabled: this.disabled
    };
  }
}
