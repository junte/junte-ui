import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { PopoverTriggers } from './enums';
import { PopoverComponent, PopoverOptions } from './popover.component';
import { PopoverService } from './popover.service';

@Directive({
  selector: '[jntPopover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective {

  @Input('jntPopover') options: PopoverOptions;

  @Output('jntCatch') catch = new EventEmitter<PopoverComponent>();

  reference: PopoverComponent;

  @HostListener('mouseenter')
  mouseEnter() {
    if (!!this.options && this.options.trigger === PopoverTriggers.hover) {
      this.show();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  documentMouseMove(e: any) {
    if (!!this.options && this.options.trigger === PopoverTriggers.hover) {
      this.hide(e.path);
    }
  }

  @HostListener('click')
  click() {
    if (!!this.options && this.options.trigger === PopoverTriggers.click) {
      this.show();
    }
  }

  @HostListener('document:click', ['$event'])
  documentClick(e: any) {
    if (!!this.options && this.options.trigger === PopoverTriggers.click) {
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
    this.catch.emit(this.reference);
  }

  private hide(path: HTMLElement[]) {
    if (!!this.reference && !this.picked(path)
      && !this.reference.picked(path)) {
      this.reference.hide();
      this.reference = null;
      this.catch.emit(this.reference);
    }
  }
}
