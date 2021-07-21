import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Behaviour } from '../../core/enums/behaviour';
import { Breakpoint } from '../../core/enums/breakpoint';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { Placement } from '../../core/enums/placement';
import { Position } from '../../core/enums/position';
import { Triggers } from '../../core/enums/triggers';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { DeviceService } from '../../layout/responsive/device.service';
import { PopoverService } from './popover.service';

const PADDING_SIZE = 8;
const DROPDOWN_PADDING_SIZE = 4;

export class PopoverOptions {

  title: string;
  content: string;
  contentTemplate: TemplateRef<any>;
  trigger: Triggers = Triggers.hover;
  position: Position = Position.bottom;
  placement: Placement = Placement.absolute;
  maxWidth: string;
  minWidth: string;
  maxHeight = '500px';
  padding: Gutter = Gutter.normal;
  features: Feature[] = [Feature.smarty];
  behaviour: Behaviour;
  disabled = false;
  context: string;

  constructor(defs: Partial<PopoverOptions> = null) {
    Object.assign(this, defs);
  }

}

class PopoverPosition {
  constructor(public top: number,
              public left: number,
              public shiftX: number = 0,
              public shiftY: number = 0) {
  }
}

@Component({
  selector: 'jnt-popover',
  templateUrl: './popover.encapsulated.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent implements OnInit {

  private observers = {target: this.createObserver(), host: this.createObserver()};

  options = new PopoverOptions();
  target: HTMLElement;

  @HostBinding('attr.host')
  readonly host = 'jnt-popover-host';

  @HostBinding('style.position')
  get placement() {
    return this.options.placement;
  }

  @HostBinding('attr.context')
  get context() {
    return this.options.context;
  }

  @HostBinding('attr.data-placement')
  position;

  @HostBinding('style.min-width')
  minWidth: string;

  @ViewChild('arrow')
  arrow: ElementRef;

  constructor(private popoverService: PopoverService,
              private breakpoint: BreakpointService,
              private renderer: Renderer2,
              private hostRef: ElementRef,
              private cd: ChangeDetectorRef,
              public device: DeviceService) {
  }

  ngOnInit() {
    this.popoverService.register(this);
  }

  private createObserver() {
    return new MutationObserver(() => this.update());
  }

  private getMaxSizes() {
    const rect = this.target.getBoundingClientRect();
    const maxWidth = +this.options.maxWidth?.replace('px', '');
    const maxHeight = +this.options.maxHeight?.replace('px', '');
    const padding = this.options.behaviour === Behaviour.dropdown ? DROPDOWN_PADDING_SIZE : PADDING_SIZE;
    let fullMaxWidth = null;
    let fullMaxHeight = null;
    switch (this.position) {
      case Position.top: {
        fullMaxHeight = rect.top - padding;
        if (this.options.behaviour === Behaviour.dropdown) {
          fullMaxWidth = window.innerWidth - rect.left - padding;
        }
        break;
      }
      case Position.right: {
        fullMaxWidth = window.innerWidth - rect.left - padding - rect.width;
        if (this.options.behaviour === Behaviour.dropdown) {
          fullMaxHeight = window.innerHeight - rect.top - padding;
        }
        break;
      }
      case Position.bottom: {
        fullMaxHeight = window.innerHeight - rect.top - padding - rect.height;
        if (this.options.behaviour === Behaviour.dropdown) {
          fullMaxWidth = window.innerWidth - rect.left - padding;
        }
        break;
      }
      case Position.rightBottom: {
        fullMaxHeight = window.innerHeight - rect.top - padding - rect.height;
        if (this.options.behaviour === Behaviour.dropdown) {
          fullMaxWidth = rect.right - padding;
        }
        break;
      }
      case Position.left: {
        fullMaxWidth = rect.left - padding;
        if (this.options.behaviour === Behaviour.dropdown) {
          fullMaxHeight = window.innerHeight - rect.top - padding;
        }
        break;
      }
    }

    if (!!fullMaxWidth) {
      this.options.maxWidth = `${!!maxWidth ? Math.min(maxWidth, fullMaxWidth) : fullMaxWidth}px`;
    }
    if (!!fullMaxHeight) {
      this.options.maxHeight = `${!!maxHeight ? Math.min(maxHeight, fullMaxHeight) : fullMaxHeight}px`;
    }
  }

  private checkPosition(position: PopoverPosition) {
    const rect = this.target.getBoundingClientRect();
    const {nativeElement: host} = this.hostRef;
    const offsetLeft = this.options.placement === Placement.absolute
      ? window.pageXOffset || document.documentElement.offsetLeft : 0;
    const offsetTop = this.options.placement === Placement.absolute
      ? window.pageYOffset || document.documentElement.offsetTop : 0;
    const padding = this.options.behaviour === Behaviour.dropdown ? DROPDOWN_PADDING_SIZE : PADDING_SIZE;

    switch (this.position) {
      case Position.top: {
        const shift = offsetTop - padding + host.clientHeight;
        if (position.top - shift < 0) {
          if (rect.top + padding + host.clientHeight < window.innerHeight) {
            this.position = Position.bottom;
          } else if (rect.right + padding + host.clientWidth < window.innerWidth) {
            this.position = Position.right;
          } else if (rect.left - padding - host.clientWidth > 0) {
            this.position = Position.left;
          } else {
            this.getMaxSizes();
          }
        }
        break;
      }
      case Position.right: {
        const shift = offsetLeft - padding - this.target.clientWidth - host.clientWidth;
        if (position.left - shift > window.innerWidth) {
          if (rect.left - padding - host.clientWidth > 0) {
            this.position = Position.left;
          } else if (rect.top + padding + host.clientHeight < window.innerHeight) {
            this.position = Position.bottom;
          } else if (rect.top - padding - host.clientHeight > 0) {
            this.position = Position.top;
          } else {
            this.getMaxSizes();
          }
        }
        break;
      }
      case Position.bottom:
      case Position.rightBottom: {
        const shift = offsetTop + padding - this.target.clientHeight - host.clientHeight;
        if (position.top - shift > window.innerHeight) {
          if (rect.top - padding - host.clientHeight > 0) {
            this.position = Position.top;
          } else if (rect.right + padding + host.clientWidth < window.innerWidth) {
            this.position = Position.right;
          } else if (rect.left - padding - host.clientWidth > 0) {
            this.position = Position.left;
          } else {
            this.getMaxSizes();
          }
        }
        break;
      }
      case Position.left: {
        const shift = offsetLeft - padding + host.clientWidth;
        if (position.left - shift < 0) {
          if (rect.right + padding + host.clientWidth < window.innerWidth) {
            this.position = Position.right;
          } else if (rect.top + padding + host.clientHeight < window.innerHeight) {
            this.position = Position.bottom;
          } else if (rect.top - padding - host.clientHeight > 0) {
            this.position = Position.top;
          } else {
            this.getMaxSizes();
          }
        }
        break;
      }
    }
  }

  private getPosition(): PopoverPosition {
    const rect = this.target.getBoundingClientRect();
    const offsetLeft = this.options.placement === Placement.absolute
      ? window.pageXOffset || document.documentElement.offsetLeft : 0;
    const offsetTop = this.options.placement === Placement.absolute
      ? window.pageYOffset || document.documentElement.offsetTop : 0;
    const position = new PopoverPosition(rect.top + offsetTop, rect.left + offsetLeft);
    const {nativeElement: host} = this.hostRef;

    this.position = this.options.position;
    if (this.options.features?.includes(Feature.smarty)) {
      this.checkPosition(position);
    } else {
      this.getMaxSizes();
    }
    this.renderer.setAttribute(host, 'data-placement', this.position);
    this.cd.detectChanges();

    switch (this.position) {
      case Position.top: {
        position.top -= host.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > (window.innerWidth + offsetLeft) - host.clientWidth
            ? host.clientWidth - ((window.innerWidth + offsetLeft) - position.left) : 0);
        break;
      }
      case Position.right: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left += this.target.clientWidth;
        position.shiftY = (position.top - offsetTop) < 0 ? position.top - offsetTop
          : (position.top > (window.innerHeight + offsetTop) - host.clientHeight
            ? host.clientHeight - ((window.innerHeight + offsetTop) - position.top) : 0);
        break;
      }
      case Position.bottom:
      case Position.rightBottom: {
        position.top += this.target.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > (window.innerWidth + offsetLeft) - host.clientWidth
            ? host.clientWidth - ((window.innerWidth + offsetLeft) - position.left) : 0);
        break;
      }
      case Position.left: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left -= host.clientWidth;
        position.shiftY = (position.top - offsetTop) < 0 ? position.top - offsetTop
          : (position.top > (window.innerHeight + offsetTop) - host.clientHeight
            ? host.clientHeight - ((window.innerHeight + offsetTop) - position.top) : 0);
        break;
      }
    }

    return position;
  }

  // TODO: options to type with optionals?.
  show({nativeElement: target}: { nativeElement: HTMLElement }, options: Partial<PopoverOptions> = {}): void {
    this.target = target;
    this.options = new PopoverOptions(options);
    this.minWidth = this.options.minWidth || (this.options.behaviour === Behaviour.dropdown
      ? this.target.clientWidth + 'px' : null);

    // TODO: think to be better
    this.observers.target.observe(target,
      {childList: true, subtree: true});

    this.observers.host.observe(this.hostRef.nativeElement,
      {childList: true, subtree: true});

    this.renderer.setAttribute(this.hostRef.nativeElement, 'data-dropdown',
      this.options.behaviour === Behaviour.dropdown ? 'true' : 'false');
    this.renderer.setStyle(this.hostRef.nativeElement, 'display', 'block');
    this.cd.detectChanges();
  }

  picked(elements: Object[]): boolean {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  update(): void {
    if (!this.target) {
      return;
    }

    const {nativeElement: host} = this.hostRef;
    this.renderer.removeStyle(this.arrow.nativeElement, 'top');
    this.renderer.removeStyle(this.arrow.nativeElement, 'left');
    this.renderer.removeStyle(host, 'top');
    this.renderer.removeStyle(host, 'left');
    this.renderer.setStyle(host, 'width', this.breakpoint.current === Breakpoint.mobile
    && (this.position === Position.top || this.position === Position.bottom) ? '100%' : 'auto');
    const position = this.getPosition();
    const rect = this.target.getBoundingClientRect();
    let left = position.left - position.shiftX;
    let top = position.top - position.shiftY;

    if (this.options.behaviour === Behaviour.dropdown) {
      this.getMaxSizes();

      if (this.position === Position.top || this.position === Position.bottom) {
        left = rect.left + (this.placement === Placement.absolute ? window.pageXOffset : 0);
      } else if (this.position === Position.rightTop || this.position === Position.rightBottom) {
        this.renderer.setStyle(host, 'width', this.breakpoint.current === Breakpoint.mobile
          ? this.options.maxWidth : 'auto');
        left = rect.left - host.clientWidth + rect.width + (this.placement === Placement.absolute ? window.pageXOffset : 0);
      } else {
        top = rect.top + (this.placement === Placement.absolute ? window.pageYOffset : 0);
      }
    }

    this.renderer.setStyle(host, 'top', `${top}px`);
    this.renderer.setStyle(host, 'left', `${left}px`);
    if (this.options.behaviour !== Behaviour.dropdown) {
      switch (this.position) {
        case Position.top:
        case Position.bottom:
        case Position.rightBottom: {
          this.renderer.setStyle(this.arrow.nativeElement, 'left', `calc(50% + ${position.shiftX}px)`);
          break;
        }
        case Position.right:
        case Position.left: {
          this.renderer.setStyle(this.arrow.nativeElement, 'top', `calc(50% + ${position.shiftY}px`);
          break;
        }
      }
    }
    this.cd.detectChanges();
  }

  hide(): void {
    this.observers.target.disconnect();
    this.observers.host.disconnect();
    this.options = new PopoverOptions();
    this.renderer.setStyle(this.hostRef.nativeElement, 'display', 'none');
    this.cd.detectChanges();
  }
}
