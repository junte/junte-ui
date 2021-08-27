import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, throttleTime } from 'rxjs/operators';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { CAROUSEL_ANIMATION } from './carousel.animation';
import { CarouselOrientation, CarouselVisibility } from './carousel.enums';
import { CarouselItemComponent } from './item/item.component';

const DEFAULT_HEIGHT = 300;
const DEFAULT_SPEED = 500;
const DEFAULT_AUTOSPEED = 1500;

@Component({
  selector: 'jnt-carousel',
  templateUrl: './carousel.encapsulated.html',
  animations: [CAROUSEL_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements AfterViewInit {

  ui = UI;
  carouselOrientation = CarouselOrientation;
  carouselVisibility = CarouselVisibility;

  private destroyed$ = new Subject<any>();
  private interval: any;
  private _speed = DEFAULT_SPEED;
  private _autoplay = false;
  private _autoplaySpeed = DEFAULT_AUTOSPEED;
  private _orientation = CarouselOrientation.left;
  private paused = false;
  private slide$ = new Subject<any>();
  current = 0;
  currentOrientation: CarouselOrientation = CarouselOrientation.left;

  @HostBinding('attr.host')
  readonly host = 'jnt-carousel-host';

  @Input()
  @HostBinding('style.height')
  height: string;

  @PropertyApi({
    description: 'Speed of carousel items changing',
    type: 'number',
    default: '500'
  })
  @Input()
  set speed(speed: number) {
    this._speed = speed || DEFAULT_SPEED;
  }

  get speed() {
    return this._speed;
  }

  @PropertyApi({
    description: 'Orientation of autoplay carousel',
    path: 'ui.carousel.orientation',
    options: [CarouselOrientation.left, CarouselOrientation.right],
    default: CarouselOrientation.left
  })
  @Input()
  set orientation(orientation: CarouselOrientation) {
    this._orientation = orientation || CarouselOrientation.left;
  }

  get orientation() {
    return this._orientation;
  }

  @PropertyApi({
    description: 'Carousel autoplay',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  set autoplay(autoplay) {
    this._autoplay = autoplay;
    this.play();
  }

  get autoplay() {
    return this._autoplay;
  }

  @PropertyApi({
    description: 'Speed of carousel autoplay',
    type: 'number',
    default: '500'
  })
  @Input()
  set autoplaySpeed(autoplaySpeed: number) {
    this._autoplaySpeed = autoplaySpeed || DEFAULT_AUTOSPEED;
    this.play();
  }

  get autoplaySpeed() {
    return this._autoplaySpeed;
  }

  @PropertyApi({
    description: 'Carousel infinite',
    type: 'boolean',
    default: 'true'
  })
  @Input()
  infinite = true;

  @PropertyApi({
    description: 'Carousel dots',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  dots = false;

  @PropertyApi({
    description: 'Carousel arrows',
    type: 'boolean',
    default: 'true'
  })
  @Input()
  arrows = true;
  @Input()

  @Output()
  onChange = new EventEmitter<any>();

  @ContentApi({
    selector: 'jnt-carousel-item',
    description: 'Carousel items'
  })
  @ContentChildren(CarouselItemComponent)
  items: QueryList<CarouselItemComponent>;

  @ViewChildren('carouselItem')
  carouselItems: QueryList<any>;

  set slide(index: number) {
    this.slide$.next(index);
  }

  @HostListener('mouseenter')
  onEnter() {
    this.paused = true;
    this.pause();
  }

  @HostListener('mouseleave')
  onLeave() {
    this.paused = false;
    this.play();
  }

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if (this.carouselItems && this.carouselItems.length > 0) {
      if (!this.height) {
        let timer = null;
        const mutators = [];
        this.carouselItems.forEach(item => {
          const mutator = new MutationObserver(() => {
            let height = Math.max.apply(null, this.carouselItems.map(item => item.nativeElement.clientHeight));
            clearTimeout(timer);
            timer = setTimeout(() => mutators.forEach(mutator => {
              if (this.height === `${height || DEFAULT_HEIGHT}px`) {
                mutator.disconnect();
              }
            }), 1000);
            this.height = `${height || DEFAULT_HEIGHT}px`;
            this.cd.detectChanges();
          });
          mutator.observe(item.nativeElement, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
          mutators.push(mutator);
        });
      }
    }

    this.slide$.pipe(
      throttleTime(this.speed),
      takeUntil(this.destroyed$)
    ).subscribe(index => {
      this.pause();
      this.go(index);
      if (this.autoplay && !this.paused) {
        this.play();
      }
    });

    this.play();
  }

  go(index: number, orientation: CarouselOrientation = null) {
    this.currentOrientation = orientation || (index < this.current
      ? CarouselOrientation.left : CarouselOrientation.right);

    if (((this.current <= 0 && this.currentOrientation === CarouselOrientation.left)
      || (this.current >= this.items.length - 1) && this.currentOrientation === CarouselOrientation.right)
      && !this.infinite) {
      return;
    }

    this.current = index < 0 ? this.items.length - 1
      : (index === this.items.length ? 0 : index);
    this.cd.detectChanges();
  }

  private play() {
    this.pause();
    if (this.autoplay && !!this.items && this.items.length > 1) {
      this.interval = setInterval(() => {
        if (!document.hidden) {
          this.go(this.current + 1, this.orientation);
        }
      }, this.autoplaySpeed);
    } else {
      this.pause();
    }
  }

  private pause() {
    clearInterval(this.interval);
  }
}
