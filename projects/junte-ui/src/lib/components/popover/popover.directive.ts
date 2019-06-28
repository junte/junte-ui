import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {PopoverComponent, PopoverOptions} from './popover.component';
import {PopoverService} from './popover.service';
import {PopoverTriggers} from '../../enum/ui';

@Directive({
  selector: '[jntPopover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective {

  @Input('jntPopover') options: PopoverOptions;

  reference: PopoverComponent;

  @HostListener('mouseenter')
  mouseEnter() {
    if (this.options.trigger === PopoverTriggers.hover) {
      this.show();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  documentMouseMove(e: any) {
    if (this.options.trigger === PopoverTriggers.hover) {
      this.hide(e.path);
    }
  }

  @HostListener('click')
  click() {
    if (this.options.trigger === PopoverTriggers.click) {
      this.show();
    }
  }

  @HostListener('document:click', ['$event'])
  documentClick(e: any) {
    if (this.options.trigger === PopoverTriggers.click) {
      this.hide(e.path);
    }
  }

  constructor(private popover: PopoverService,
              private hostRef: ElementRef) {
  }

  private picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  private show() {
    this.reference = this.popover.show(this.hostRef, this.options);
  }

  private hide(path: HTMLElement[]) {
    if (!!this.reference && !this.picked(path)
      && !this.reference.picked(path)) {
      this.reference.hide();
      this.reference = null;
    }
  }
}
