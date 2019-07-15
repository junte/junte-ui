import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter, HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList
} from '@angular/core';
import { UI } from '../../enum/ui';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { SliderCarouselItemComponent } from './item/item.component';

const DEFAULT_HEIGHT = 300;
const DEFAULT_SPEED = 500;
const DEFAULT_AUTOSPEED = 1500;

@Component({
  selector: 'jnt-slider-carousel',
  templateUrl: './slider.encapsulated.html'
})
export class SliderCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @HostBinding('attr.host') readonly host = 'jnt-slider-carousel-host';

  private prev$: Subject<any> = new Subject<any>();
  private next$: Subject<any> = new Subject<any>();
  private subscriptions: Subscription = new Subscription();
  private itemWidth: number;
  private first: number;
  private last: number;
  private interval: any;
  ui = UI;
  current: number = 0;

  @Input() height: string;
  @Input() width: string = '100%';
  @Input() speed: number = DEFAULT_SPEED;
  @Input() autoPlay: boolean = true;
  @Input() autoPlaySpeed: number = DEFAULT_AUTOSPEED;
  @Input() infinite: boolean = true;
  @Input('dots') isDotsVisible: boolean = true;
  @Input('arrows') isArrowsVisible: boolean = true;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(SliderCarouselItemComponent) items: QueryList<SliderCarouselItemComponent>;

  @HostListener('window:resize') onResize() {
    this.rePosition();
  }

  constructor(private hostRef: ElementRef) {
  }

  ngOnInit() {
    this.play();
    this.subscriptions.add(this.prev$.pipe(throttleTime(this.speed))
      .subscribe(() => this.slideLeft()));
    this.subscriptions.add(this.next$.pipe(throttleTime(this.speed))
      .subscribe(() => this.slideRight()));
  }

  ngAfterViewInit() {
    if (this.items && this.items.length > 0) {
      this.onChange.emit(0);
      this.itemWidth = this.items.first.slide.nativeElement.offsetWidth;

      if (!this.height) {
        let height = 0;
        this.items.forEach(item => height = Math.max(height, item.height));
        this.height = `${height}px`;
      }
    }

    this.hostRef.nativeElement.style.height = this.height || `${DEFAULT_HEIGHT}px`;
    this.hostRef.nativeElement.style.width = this.width;
    this.first = 0;
    this.last = this.items.length - 1;
    this.items.forEach((item, index) => {
      item.speed = this.speed;
      item.position = this.itemWidth * index;

      this.initSwiper(item, index);
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  initSwiper(item: SliderCarouselItemComponent, itemIndex: number) {
    let totalDistanceSwiped = 0;

    this.subscriptions.add(item.swiper.onSwipeLeft.subscribe((distance: number) => {
      totalDistanceSwiped += Math.abs(distance);
      const shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
      if (itemIndex === this.first && this.infinite) {
        this.rotateRight();
      }
      this.items.forEach(item => {
        if ((itemIndex === this.first || (itemIndex === this.last && distance > 0))
          && !this.infinite) {
          item.currentPosition += shortDistance;
        } else {
          item.currentPosition += distance;
        }
        item.moveTo(item.currentPosition);
      });
    }));

    this.subscriptions.add(item.swiper.onSwipeRight.subscribe((distance: number) => {
      totalDistanceSwiped += Math.abs(distance);
      const shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
      if (itemIndex === this.last && this.infinite) {
        this.rotateLeft();
      }
      this.items.forEach(item => {
        if ((itemIndex === this.last || (itemIndex === this.first && distance < 0))
          && !this.infinite) {
          item.currentPosition += shortDistance;
        } else {
          item.currentPosition += distance;
        }
        item.moveTo(item.currentPosition);
      });
    }));

    this.subscriptions.add(item.swiper.swipeLeft.subscribe(() => {
      totalDistanceSwiped = 0;
      this.slideLeft();
    }));

    this.subscriptions.add(item.swiper.swipeRight.subscribe(() => {
      totalDistanceSwiped = 0;
      this.slideRight();
    }));

    this.subscriptions.add(item.swiper.onSwipeStart.subscribe(() => {
      totalDistanceSwiped = 0;
      this.disableTransition();
    }));

    this.subscriptions.add(item.swiper.onSwipeEnd.subscribe(() => {
      totalDistanceSwiped = 0;
      this.enableTransition();
      this.slideToPrevPosition();
    }));
  }

  next() {
    this.next$.next();
  }

  prev() {
    this.prev$.next();
  }

  slideTo(index: number) {
    this.onChange.emit((index + this.items.length) % this.items.length);
    const steps = this.current - index;
    if (this.infinite) {
      if (steps > 0) {
        while (this.current !== this.last) {
          this.rotateRight();
        }
      } else if (steps < 0) {
        while (this.current !== this.first) {
          this.rotateLeft();
        }
      }
    }
    setTimeout(() => {
      this.enableTransition();
      this.items.forEach(item => {
        item.position += this.itemWidth * (steps);
        item.currentPosition = item.position;
        item.moveTo(item.position);
      });
      this.current = (index + this.items.length) % this.items.length;
    }, 50);
  }

  slideLeft() {
    if (!this.infinite && this.current === 0) {
      this.slideToPrevPosition();
    } else {
      this.slideTo(this.current - 1);
    }
  }

  slideRight() {
    if (!this.infinite && this.current === this.items.length - 1) {
      this.slideToPrevPosition();
    } else {
      this.slideTo(this.current + 1);
    }
  }

  slideToPrevPosition() {
    this.enableTransition();
    this.items.forEach(item => {
      item.currentPosition = item.position;
      item.moveTo(item.position);
    });
  }

  disableTransition() {
    this.items.forEach(item => item.disableTransition());
  }

  enableTransition() {
    this.items.forEach(item => item.enableTransition());
  }

  getItem(index: number) {
    return this.items.find((item, i) => i === index);
  }

  rotateRight() {
    const firstItemRef = this.getItem(this.first);
    const lastItemRef = this.getItem(this.last);
    this.disableTransition();
    lastItemRef.position = firstItemRef.position - this.itemWidth;
    this.first = this.last;
    this.last = (this.last - 1 + this.items.length) % this.items.length;
  }

  rotateLeft() {
    const firstItemRef = this.getItem(this.first);
    const lastItemRef = this.getItem(this.last);
    this.disableTransition();
    firstItemRef.position = lastItemRef.position + this.itemWidth;
    this.last = this.first;
    this.first = (this.last + 1) % this.items.length;
  }

  rePosition() {
    if (this.items && this.items.length > 0) {
      this.itemWidth = this.items.first.slide.nativeElement.offsetWidth;
    }
    const items = this.items.toArray();
    items.sort((item1, item2) => {
      if (item1.position > item2.position) {
        return 1;
      } else if (item1.position < item2.position) {
        return -1;

      } else {
        return 0;
      }
    });

    const currentItem = this.getItem(this.current);
    const current = items.indexOf(currentItem);
    for (let i = current; i < items.length + current; i++) {
      const item = items[(i + items.length) % items.length];
      item.position = ((i + items.length) % items.length - current) * this.itemWidth;
    }
  }

  play(autoplay: boolean = true) {
    if (this.autoPlay) {
      if (autoplay) {
        this.interval = setInterval(() => {
          if (!document.hidden) {
            this.next();
          }
        }, this.autoPlaySpeed);
      } else {
        clearInterval(this.interval);
      }
    }
  }
}
