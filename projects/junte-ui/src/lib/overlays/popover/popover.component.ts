import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Feature } from '../../core/enums/feature';
import { PopoverPlacements, PopoverPosition, PopoverTriggers } from './enums';

const PADDING_SIZE = 14;

export class PopoverOptions {
  title: string;
  content: string;
  contentTemplate: TemplateRef<void>;
  trigger: PopoverTriggers = PopoverTriggers.hover;
  placement: PopoverPlacements = PopoverPlacements.bottom;
  position: PopoverPosition = PopoverPosition.absolute;
  maxWidth: string;
  minWidth: string;
  maxHeight = '400px';
  smarty = true;
  features: Feature[] = [];

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

class Position {
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
export class PopoverComponent {

  private observers = {target: this.createObserver(), host: this.createObserver()};

  options = new PopoverOptions();
  target: HTMLElement;

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

  @HostBinding('style.position')
  get position() {
    return this.options.position;
  }

  @HostBinding('attr.data-placement')
  placement: PopoverPlacements;

  @HostBinding('style.min-width') minWidth: string;

  @ViewChild('arrow') arrow: ElementRef;

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef,
              private cd: ChangeDetectorRef) {
  }

  private createObserver() {
    return new MutationObserver(() => this.update());
  }

  private getPosition(): Position {
    const rect = this.target.getBoundingClientRect(),
      scrollLeft = this.options.position === PopoverPosition.absolute
        ? window.pageXOffset || document.documentElement.scrollLeft : 0,
      scrollTop = this.options.position === PopoverPosition.absolute
        ? window.pageYOffset || document.documentElement.scrollTop : 0,
      position = new Position(rect.top + scrollTop, rect.left + scrollLeft),
      {nativeElement: host} = this.hostRef;

    this.placement = this.options.placement;
    if (this.options.smarty) {
      switch (this.placement) {
        case PopoverPlacements.top: {
          const shift = scrollTop - PADDING_SIZE + host.clientHeight;
          if (position.top - shift < 0) {
            this.placement = PopoverPlacements.bottom;
          }
          break;
        }
        case PopoverPlacements.right: {
          const shift = scrollLeft - PADDING_SIZE - this.target.clientWidth - host.clientWidth;
          if (position.left - shift > window.innerWidth) {
            this.placement = PopoverPlacements.left;
          }
          break;
        }
        case PopoverPlacements.bottom: {
          const shift = scrollTop + PADDING_SIZE - this.target.clientHeight - host.clientHeight;
          if (position.top - shift > window.innerHeight) {
            this.placement = PopoverPlacements.top;
          }
          break;
        }
        case PopoverPlacements.left: {
          const shift = scrollLeft - PADDING_SIZE + host.clientWidth;
          if (position.left - shift < 0) {
            this.placement = PopoverPlacements.right;
          }
          break;
        }
      }
    }

    switch (this.placement) {
      case PopoverPlacements.top: {
        position.top -= host.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > (window.innerWidth + scrollLeft) - host.clientWidth
            ? host.clientWidth - ((window.innerWidth + scrollLeft) - position.left) : 0);
        break;
      }
      case PopoverPlacements.right: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left += this.target.clientWidth;
        position.shiftY = (position.top - scrollTop) < 0 ? position.top - scrollTop
          : (position.top > (window.innerHeight + scrollTop) - host.clientHeight
            ? host.clientHeight - ((window.innerHeight + scrollTop) - position.top) : 0);
        break;
      }
      case PopoverPlacements.bottom: {
        position.top += this.target.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > (window.innerWidth + scrollLeft) - host.clientWidth
            ? host.clientWidth - ((window.innerWidth + scrollLeft) - position.left) : 0);
        break;
      }
      case PopoverPlacements.left: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left -= host.clientWidth;
        position.shiftY = (position.top - scrollTop) < 0 ? position.top - scrollTop
          : (position.top > (window.innerHeight + scrollTop) - host.clientHeight
            ? host.clientHeight - ((window.innerHeight + scrollTop) - position.top) : 0);
        break;
      }
    }

    return position;
  }

  // TODO: options to type with optionals?.
  show({nativeElement: target}: { nativeElement: HTMLElement }, options: Object = {}): void {
    this.target = target;
    this.options = new PopoverOptions(options);
    this.minWidth = this.options.minWidth || (this.options.features.includes(Feature.dropdown)
      ? this.target.clientWidth + 'px' : null);

    // TODO: think to be better
    this.observers.target.observe(target,
      {childList: true, subtree: true});

    this.observers.host.observe(this.hostRef.nativeElement,
      {childList: true, subtree: true});

    this.renderer.setAttribute(this.hostRef.nativeElement, 'data-dropdown',
      this.options.features.includes(Feature.dropdown).toString());
    this.renderer.setStyle(this.hostRef.nativeElement, 'display', 'block');
    this.cd.detectChanges();
  }

  picked(elements: HTMLElement[]): boolean {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  update(): void {
    const {nativeElement: host} = this.hostRef;
    const position = this.getPosition();
    const left = this.options.features.includes(Feature.dropdown)
    && (this.placement === PopoverPlacements.top || this.placement === PopoverPlacements.bottom)
      ? this.target.getBoundingClientRect().left
      : position.left - position.shiftX;
    const top = this.options.features.includes(Feature.dropdown)
    && (this.placement === PopoverPlacements.right || this.placement === PopoverPlacements.left)
      ? this.target.getBoundingClientRect().top
      : position.top - position.shiftY;

    this.renderer.setStyle(host, 'top', `${top}px`);
    this.renderer.setStyle(host, 'left', `${left}px`);

    if (!this.options.features.includes(Feature.dropdown)) {
      switch (this.placement) {
        case PopoverPlacements.top:
        case PopoverPlacements.bottom: {
          this.renderer.setStyle(this.arrow.nativeElement, 'left', `calc(50% + ${position.shiftX}px)`);
          this.renderer.removeStyle(this.arrow.nativeElement, 'top');
          break;
        }
        case PopoverPlacements.right:
        case PopoverPlacements.left: {
          this.renderer.removeStyle(this.arrow.nativeElement, 'left');
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
