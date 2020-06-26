import { Component, ElementRef, HostBinding, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Feature } from '../../core/enums/feature';
import { PopoverPlacements, PopoverTriggers } from './enums';

export class PopoverOptions {
  title: string;
  content: string;
  contentTemplate: TemplateRef<void>;
  trigger: PopoverTriggers = PopoverTriggers.hover;
  placement: PopoverPlacements = PopoverPlacements.bottom;
  maxWidth: string;
  minWidth: string;
  maxHeight: string;
  smarty = true;
  features: Feature[] = [];

  constructor(defs: any = null) {
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
  templateUrl: './popover.encapsulated.html'
})
export class PopoverComponent {

  observer = new MutationObserver(() => this.update());

  options = new PopoverOptions();
  target: HTMLElement;
  visible = false;

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

  @HostBinding('style.display')
  get display() {
    return this.visible ? 'block' : 'none';
  }

  @HostBinding('attr.data-placement')
  placement: PopoverPlacements;

  @HostBinding('attr.data-dropdown')
  get dropdown() {
    return this.options.features.includes(Feature.dropdown);
  }

  @HostBinding('style.min-width') minWidth: string;

  @ViewChild('arrow') arrow: ElementRef;

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  private getPosition(): PopoverPosition {
    const rect = this.target.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const position = new PopoverPosition(rect.top + scrollTop, rect.left + scrollLeft);

    const {nativeElement: host} = this.hostRef;

    this.placement = this.options.placement;
    if (this.options.smarty) {
      switch (this.options.placement) {
        case PopoverPlacements.top:
          if (position.top - host.clientHeight < 0) {
            this.placement = PopoverPlacements.bottom;
          }
          break;
        case PopoverPlacements.right:
          if (position.left + this.target.clientWidth + host.clientWidth > window.innerWidth) {
            this.placement = PopoverPlacements.left;
          }
          break;
        case PopoverPlacements.bottom:
          if (position.top - this.target.clientHeight + host.clientHeight > window.innerHeight) {
            this.placement = PopoverPlacements.top;
          }
          break;
        case PopoverPlacements.left:
          if (position.left - host.clientWidth < 0) {
            this.placement = PopoverPlacements.right;
          }
          break;
      }
    }

    switch (this.placement) {
      case PopoverPlacements.top: {
        position.top -= host.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > window.innerWidth - host.clientWidth
            ? host.clientWidth - (window.innerWidth - position.left) : 0);
        break;
      }
      case PopoverPlacements.right: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left += this.target.clientWidth;
        position.shiftY = position.top < 0 ? position.top
          : (position.top > window.innerHeight - host.clientHeight
            ? host.clientHeight - (window.innerHeight - position.top) : 0);
        break;
      }
      case PopoverPlacements.bottom: {
        position.top += this.target.clientHeight;
        position.left += (this.target.clientWidth - host.clientWidth) / 2;
        position.shiftX = position.left < 0 ? position.left
          : (position.left > window.innerWidth - host.clientWidth
            ? host.clientWidth - (window.innerWidth - position.left) : 0);
        break;
      }
      case PopoverPlacements.left: {
        position.top += (this.target.clientHeight - host.clientHeight) / 2;
        position.left -= host.clientWidth;
        position.shiftY = position.top < 0 ? position.top
          : (position.top > window.innerHeight - host.clientHeight
            ? host.clientHeight - (window.innerHeight - position.top) : 0);
        break;
      }
    }

    return position;
  }

  show({nativeElement: target}: { nativeElement: HTMLElement },
       options: PopoverOptions): void {
    this.target = target;
    this.options = new PopoverOptions(options);
    this.minWidth = this.options.minWidth || this.options.features.includes(Feature.dropdown)
      ? this.target.clientWidth + 'px' : null;
    this.observer.observe(this.hostRef.nativeElement, {
      childList: true,
      subtree: true
    });

    this.visible = true;
  }

  picked(elements: HTMLElement[]): boolean {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  update(): void {
    const {nativeElement: host} = this.hostRef;
    const position = this.getPosition();
    const left = this.options.features.includes(Feature.dropdown)
      ? this.target.getBoundingClientRect().left
      : position.left - position.shiftX;

    this.renderer.setStyle(host, 'top', `${position.top - position.shiftY}px`);
    this.renderer.setStyle(host, 'left', `${left}px`);

    if (!this.options.features.includes(Feature.dropdown)) {
      switch (this.placement) {
        case PopoverPlacements.top:
        case PopoverPlacements.bottom: {
          this.renderer.setStyle(this.arrow.nativeElement, 'left',
            `calc(50% + ${position.shiftX}px)`);
          break;
        }
        case PopoverPlacements.right:
        case PopoverPlacements.left: {
          this.renderer.setStyle(this.arrow.nativeElement, 'top',
            `calc(50% + ${position.shiftY}px)`);
          break;
        }
      }
    }
  }

  hide(): void {
    this.observer.disconnect();
    this.options = new PopoverOptions();
    this.visible = false;
  }
}
