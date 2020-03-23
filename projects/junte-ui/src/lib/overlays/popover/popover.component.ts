import { Component, ElementRef, HostBinding, Renderer2, TemplateRef } from '@angular/core';
import { Scheme } from '../../core/enums/scheme';
import { PopoverPlacements, PopoverTriggers } from './enums';

export class PopoverOptions {
  title: string;
  content: string;
  contentTemplate: TemplateRef<void>;
  trigger: PopoverTriggers;
  placement: PopoverPlacements;
  maxWidth: string;
  maxHeight: string;
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

  options = new PopoverOptions();
  visible = false;

  @HostBinding('attr.host') readonly host = 'jnt-popover-host';

  @HostBinding('style.display')
  get display() {
    return this.visible ? 'block' : 'none';
  }

  @HostBinding('attr.scheme')
  get scheme() {
    return this.options.scheme ? this.options.scheme : Scheme.primary;
  }

  constructor(private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  private getPosition(target: ElementRef): { top, left } {
    const rect = target.nativeElement.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // remove 40 when will normal positioning
    let top = rect.top + scrollTop + 40;
    let left = rect.left + scrollLeft;
    switch (this.options.placement) {
      case PopoverPlacements.top: {
        top -= this.hostRef.nativeElement.clientHeight;
        left -= this.hostRef.nativeElement.clientWidth / 2;
        break;
      }
      /*case PopoverPlacements.top: {
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
      }*/
    }


    return {top: top, left};
  }

  show(target: ElementRef, options: PopoverOptions): void {
    this.options = new PopoverOptions(options);
    const position = this.getPosition(target);
    this.renderer.setStyle(this.hostRef.nativeElement, 'top', `${position.top}px`);
    this.renderer.setStyle(this.hostRef.nativeElement, 'left', `${position.left}px`);
    this.visible = true;

  }

  picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  hide(): void {
    this.options = new PopoverOptions();
    this.visible = false;
  }
}
