import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { combineLatest } from 'rxjs';

const ZERO = 0.000000000001;
const SWIPE_DELAY = 350;

@Directive({
  selector: '[swiper]',
  exportAs: 'swiper'
})
export class SwiperDirective {

  static canISwipe = true;

  isDown = false;
  initialPos = ZERO;
  lastPos = ZERO;
  swipeDistance = ZERO;
  firstSwipeDate = Date.now();

  @Output()
  onSwipeRight = new EventEmitter<any>();

  @Output()
  onSwipeLeft = new EventEmitter<any>();

  @Output()
  onSwipeStart = new EventEmitter<any>();

  @Output()
  onSwipeEnd = new EventEmitter<any>();

  @Output()
  swipeLeft = new EventEmitter<any>();

  @Output()
  swipeRight = new EventEmitter<any>();

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.swipeStart(event.clientX);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDown) {
      this.swipeMove(event.clientX);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (!this.isDown) {
      return;
    }
    this.isDown = false;
    this.swipeEnd();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: any) {
    let touch = event.touches[0] || event.changedTouches[0];
    this.swipeStart(touch.clientX);
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: any) {
    if (!SwiperDirective.canISwipe) {
      return;
    }
    let touch = event.touches[0] || event.changedTouches[0];
    this.swipeMove(touch.clientX);
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.swipeEnd();
  }

  ngOnInit() {
    combineLatest([this.swipeLeft, this.swipeRight]).subscribe(() => {
      SwiperDirective.canISwipe = false;
      setTimeout(() => SwiperDirective.canISwipe = true, SWIPE_DELAY);
    });
  }

  private swipeStart(x: number) {
    if (!SwiperDirective.canISwipe) {
      return;
    }
    this.firstSwipeDate = Date.now();
    this.initialPos = x;
    this.swipeDistance = ZERO;
    this.onSwipeStart.emit();
  }

  private swipeMove(x: number) {
    if (!SwiperDirective.canISwipe) {
      return;
    }
    let swipeFrameDistance = x - this.initialPos - this.lastPos;
    swipeFrameDistance = swipeFrameDistance < 30 ? swipeFrameDistance : 30;
    this.swipeDistance += swipeFrameDistance;
    this.lastPos = x - this.initialPos;

    if (swipeFrameDistance > 0) {
      this.onSwipeLeft.emit(swipeFrameDistance);
    } else {
      this.onSwipeRight.emit(swipeFrameDistance);
    }
  }

  private swipeEnd() {
    this.initialPos = this.lastPos = ZERO;
    if (this.swipeDistance > 100) {
      this.swipeLeft.emit();
    } else if (this.swipeDistance < -100) {
      this.swipeRight.emit();
    } else {
      this.onSwipeEnd.emit();
    }
    this.swipeDistance = ZERO;
  }
}
