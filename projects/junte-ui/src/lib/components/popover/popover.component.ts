import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  trigger = PopoverTriggers.hover;
  visible$ = new BehaviorSubject<boolean>(false);

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

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
              public element: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.visible$.subscribe(visible => {
      this.renderer.setStyle(this.element.nativeElement, 'display', visible ? 'block' : 'none');
      if (visible) {
        this.renderer.addClass(this.element.nativeElement, `${this.placement}`);
        if (!!this.container) {
          const position = this.getPosition(this.container.element.nativeElement, this.element.nativeElement);
          this.renderer.setStyle(this.element.nativeElement, 'top', `${position.top}px`);
          this.renderer.setStyle(this.element.nativeElement, 'left', `${position.left}px`);
        }
      }
    });
  }

  show(): void {
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }

  getPosition(hostEl: HTMLElement, popoverEl: HTMLElement): { top, left } {
    let top = 0;
    let left = 0;
    switch (this.placement) {
      case PopoverPlacements.topLeft: {
        top = hostEl.offsetTop - popoverEl.clientHeight;
        left = hostEl.offsetLeft;
        break;
      }
      case PopoverPlacements.top: {
        top = hostEl.offsetTop - popoverEl.clientHeight;
        left = hostEl.offsetLeft + (hostEl.clientWidth - popoverEl.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.topRight: {
        top = hostEl.offsetTop - popoverEl.clientHeight;
        left = hostEl.offsetLeft + (hostEl.clientWidth - popoverEl.clientWidth);
        break;
      }
      case PopoverPlacements.leftTop: {
        top = hostEl.offsetTop;
        left = hostEl.offsetLeft - popoverEl.clientWidth;
        break;
      }
      case PopoverPlacements.left: {
        top = hostEl.offsetTop + (hostEl.clientHeight - popoverEl.clientHeight) / 2;
        left = hostEl.offsetLeft - popoverEl.clientWidth;
        break;
      }
      case PopoverPlacements.leftBottom: {
        top = hostEl.offsetTop + (hostEl.clientHeight - popoverEl.clientHeight);
        left = hostEl.offsetLeft - popoverEl.clientWidth;
        break;
      }
      case PopoverPlacements.bottomLeft: {
        top = hostEl.offsetTop + hostEl.clientHeight;
        left = hostEl.offsetLeft;
        break;
      }
      case PopoverPlacements.bottom: {
        top = hostEl.offsetTop + hostEl.clientHeight;
        left = hostEl.offsetLeft + (hostEl.clientWidth - popoverEl.clientWidth) / 2;
        break;
      }
      case PopoverPlacements.bottomRight: {
        top = hostEl.offsetTop + hostEl.clientHeight;
        left = hostEl.offsetLeft + (hostEl.clientWidth - popoverEl.clientWidth);
        break;
      }
      case PopoverPlacements.rightTop: {
        top = hostEl.offsetTop;
        left = hostEl.offsetLeft + hostEl.clientWidth;
        break;
      }
      case PopoverPlacements.right: {
        top = hostEl.offsetTop + (hostEl.clientHeight - popoverEl.clientHeight) / 2;
        left = hostEl.offsetLeft + hostEl.clientWidth;
        break;
      }
      case PopoverPlacements.rightBottom: {
        top = hostEl.offsetTop + (hostEl.clientHeight - popoverEl.clientHeight);
        left = hostEl.offsetLeft + hostEl.clientWidth;
        break;
      }
      default:
        return {top: 0, left: 0};
    }

    return {top: top, left: left};
  }
}
