import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PopoverPlacements, PopoverTriggers } from '../../enum/ui';

export class PopoverOptions {
  title: string;
  content: string | TemplateRef<void>;
  enterDelay: number;
  leaveDelay: number;
  trigger: PopoverTriggers;
  placement: PopoverPlacements;

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

@Component({
  selector: 'jnt-popover',
  templateUrl: './encapsulated.html'
})
export class PopoverComponent implements AfterViewInit {

  private elementRelative: HTMLElement;
  private element: HTMLElement;

  trigger = PopoverTriggers.hover;
  visible$ = new BehaviorSubject<boolean>(false);
  hovered$ = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

  @HostBinding('style.display')
  get display() {
    return this.visible ? 'block' : 'none';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.visible = true;
    // this.hovered$.next(true);
  }

  @HostListener('mouseout')
  onMouseOut() {
    // this.hovered$.next(false);
    this.visible = false;
    console.log('mouseout in popover');
  }

  @Input() enterDelay = 0.15;
  @Input() leaveDelay = 0.15;
  @Input() title: string | TemplateRef<void>;
  @Input() content: string | TemplateRef<void>;
  @Input() container: ViewContainerRef;
  @Input() placement: PopoverPlacements = PopoverPlacements.top;

  @Input()
  set visible(visible: boolean) {
    if (this.visible !== visible) {
      this.visible$.next(visible);
    }
  }

  get visible(): boolean {
    return this.visible$.getValue();
  }

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.element = this.hostRef.nativeElement;
    this.visible$.pipe(filter(v => !!v))
      .subscribe(() => {
        this.renderer.addClass(this.element, this.placement);
        const position = this.getPosition(this.elementRelative);
        this.renderer.setStyle(this.element, 'top', `${position.top}px`);
        this.renderer.setStyle(this.element, 'left', `${position.left}px`);
      });
  }

  private setOptions(options: PopoverOptions): void {
    if (!!options.title) {
      this.title = options.title;
    }
    if (!!options.content) {
      this.content = options.content;
    }
    if (!!options.enterDelay) {
      this.enterDelay = options.enterDelay;
    }
    if (!!options.leaveDelay) {
      this.leaveDelay = options.leaveDelay;
    }
    if (!!options.trigger) {
      this.trigger = options.trigger;
    }
    if (!!options.placement) {
      this.placement = options.placement;
    }
  }

  private getPosition(elementRelative: HTMLElement): { top, left } {
    let top = 0;
    let left = 0;
    switch (this.placement) {
      case PopoverPlacements.topLeft: {
        top = elementRelative.offsetTop - this.element.clientHeight;
        left = elementRelative.offsetLeft;
        break;
      }
      case PopoverPlacements.top: {
        top = elementRelative.offsetTop - this.element.clientHeight;
        left = elementRelative.offsetLeft + (elementRelative.clientWidth - this.element.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.topRight: {
        top = elementRelative.offsetTop - this.element.clientHeight;
        left = elementRelative.offsetLeft + (elementRelative.clientWidth - this.element.clientWidth);
        break;
      }
      case PopoverPlacements.leftTop: {
        top = elementRelative.offsetTop;
        left = elementRelative.offsetLeft - this.element.clientWidth;
        break;
      }
      case PopoverPlacements.left: {
        top = elementRelative.offsetTop + (elementRelative.clientHeight - this.element.clientHeight) / 2;
        left = elementRelative.offsetLeft - this.element.clientWidth;
        break;
      }
      case PopoverPlacements.leftBottom: {
        top = elementRelative.offsetTop + (elementRelative.clientHeight - this.element.clientHeight);
        left = elementRelative.offsetLeft - this.element.clientWidth;
        break;
      }
      case PopoverPlacements.bottomLeft: {
        top = elementRelative.offsetTop + elementRelative.clientHeight;
        left = elementRelative.offsetLeft;
        break;
      }
      case PopoverPlacements.bottom: {
        top = elementRelative.offsetTop + elementRelative.clientHeight;
        left = elementRelative.offsetLeft + (elementRelative.clientWidth - this.element.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.bottomRight: {
        top = elementRelative.offsetTop + elementRelative.clientHeight;
        left = elementRelative.offsetLeft + (elementRelative.clientWidth - this.element.clientWidth);
        break;
      }
      case PopoverPlacements.rightTop: {
        top = elementRelative.offsetTop;
        left = elementRelative.offsetLeft + elementRelative.clientWidth;
        break;
      }
      case PopoverPlacements.right: {
        top = elementRelative.offsetTop + (elementRelative.clientHeight - this.element.clientHeight) / 2;
        left = elementRelative.offsetLeft + elementRelative.clientWidth;
        break;
      }
      case PopoverPlacements.rightBottom: {
        top = elementRelative.offsetTop + (elementRelative.clientHeight - this.element.clientHeight);
        left = elementRelative.offsetLeft + elementRelative.clientWidth;
        break;
      }
      default:
        return {top: 0, left: 0};
    }

    return {top: top, left: left};
  }

  show(element: HTMLElement, options: PopoverOptions): void {
    this.elementRelative = element;
    this.setOptions(options);
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }
}
