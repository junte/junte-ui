import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, ViewChild } from '@angular/core';
import { UI } from '../../../enum/ui';
import { SwiperDirective } from '../swiper.directive';

@Component({
  selector: 'jnt-slider-carousel-item',
  templateUrl: './item.encapsulated.html'
})
export class SliderCarouselItemComponent implements AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-slider-carousel-item-host';

  ui = UI;

  private _position: number = 0;

  @ViewChild('slide') slide: ElementRef;
  @ViewChild(SwiperDirective) swiper: SwiperDirective;
  speed: number;
  currentPosition: number = 0;
  height: number;

  set position(position: number) {
    this._position = position;
    this.currentPosition = position;
    this.moveTo(position);
  }

  get position() {
    return this._position;
  }

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.height = this.slide.nativeElement.clientHeight;
  }

  setStyle(style: string, value: string) {
    this.renderer.setStyle(this.slide.nativeElement, style, value);
    this.renderer.setStyle(this.slide.nativeElement, `-webkit-${style}`, value);
    this.renderer.setStyle(this.slide.nativeElement, `-moz-${style}`, value);
    this.renderer.setStyle(this.slide.nativeElement, `-o-${style}`, value);
    this.renderer.setStyle(this.slide.nativeElement, `-ms-${style}`, value);
  }

  moveTo(position: number) {
    this.setStyle('transform', `translate(${position}px, 0px)`);
  }

  disableTransition() {
    this.setStyle('transition', 'none');
  }

  enableTransition() {
    this.setStyle('transition', 'transform');
    this.setStyle('transition-duration', `${this.speed}ms`);
  }

}
