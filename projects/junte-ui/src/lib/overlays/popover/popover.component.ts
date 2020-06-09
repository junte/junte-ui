import { Component, ElementRef, HostBinding, Renderer2, TemplateRef } from '@angular/core';
import { Scheme } from '../../core/enums/scheme';
import { PopoverPlacements, PopoverTriggers } from './enums';

export class PopoverOptions {
  title: string;
  content: string;
  contentTemplate: TemplateRef<void>;
  trigger: PopoverTriggers = PopoverTriggers.hover;
  placement: PopoverPlacements = PopoverPlacements.bottom;
  maxWidth: string;
  maxHeight: string;
  smarty = true;
  scheme: Scheme = Scheme.secondary;

  constructor(defs: any = null) {
    Object.assign(this, defs);
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

  @HostBinding('attr.data-scheme')
  get scheme() {
    return this.options.scheme;
  }

  @HostBinding('attr.data-placement')
  placement: PopoverPlacements;

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  private getPosition(): { top, left } {
    const rect = this.target.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let top = rect.top + scrollTop;
    let left = rect.left + scrollLeft;

    const {nativeElement: host} = this.hostRef;

    this.placement = this.options.placement;
    if (this.options.smarty) {
      switch (this.options.placement) {
        case PopoverPlacements.top:
          if (top - host.clientHeight < 0) {
            this.placement = PopoverPlacements.bottom;
          }
          break;
        case PopoverPlacements.right:
          if (left + this.target.clientWidth + host.clientWidth > window.innerWidth) {
            this.placement = PopoverPlacements.left;
          }
          break;
        case PopoverPlacements.bottom:
          if (top - this.target.clientHeight + host.clientHeight > window.innerHeight) {
            this.placement = PopoverPlacements.top;
          }
          break;
        case PopoverPlacements.left:
          if (left - host.clientWidth < 0) {
            this.placement = PopoverPlacements.right;
          }
          break;
      }
    }

    switch (this.placement) {
      case PopoverPlacements.top:
        top -= host.clientHeight;
        left += (this.target.clientWidth - host.clientWidth) / 2;
        break;
      case PopoverPlacements.right:
        top += (this.target.clientHeight - host.clientHeight) / 2;
        left += this.target.clientWidth;
        break;
      case PopoverPlacements.bottom:
        top += this.target.clientHeight;
        left += (this.target.clientWidth - host.clientWidth) / 2;
        break;
      case PopoverPlacements.left:
        top += (this.target.clientHeight - host.clientHeight) / 2;
        left -= host.clientWidth;
        break;
    }

    return {top: top, left};
  }

  show({nativeElement: target}: { nativeElement: HTMLElement },
       options: PopoverOptions): void {
    this.target = target;
    this.options = new PopoverOptions(options);
    this.observer.observe(this.hostRef.nativeElement, {
      childList: true,
      subtree: true
    });

    this.update();
    this.visible = true;
  }

  picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  update() {
    const {nativeElement: host} = this.hostRef;
    const position = this.getPosition();
    this.renderer.setStyle(host, 'top', `${position.top}px`);
    this.renderer.setStyle(host, 'left', `${position.left}px`);
  }

  hide(): void {
    this.observer.disconnect();
    this.options = new PopoverOptions();
    this.visible = false;
  }
}
