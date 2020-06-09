import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { PopoverTriggers } from './enums';
import { PopoverComponent, PopoverOptions } from './popover.component';
import { PopoverService } from './popover.service';

@Directive({
  selector: '[jntPopover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective implements OnDestroy {

  private options: PopoverOptions;
  private reference: PopoverComponent;

  @Input('jntPopover')
  set __options__(options: PopoverOptions) {
    this.options = new PopoverOptions(options);
  }

  ngOnDestroy() {
    if (!!this.reference) {
      this.reference.hide();
      this.reference = null;
    }
  }

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
  documentClick(e: { path: HTMLElement[] }) {
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
