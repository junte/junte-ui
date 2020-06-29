import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
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

  @Output('jntPopoverDisplayed')
  displayed = new EventEmitter<PopoverComponent>();

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

  @HostListener('document:mousemove', ['$event.path'])
  moveOutside(path: HTMLElement[]) {
    if (this.options.trigger === PopoverTriggers.hover && !this.picked(path)) {
      this.hide(path);
    }
  }

  @HostListener('click')
  click() {
    if (this.options.trigger === PopoverTriggers.click) {
      !this.reference ? this.show() : this.hide();
    }
  }

  @HostListener('document:click', ['$event.path'])
  clickOutside(path: HTMLElement[]) {
    if (this.options.trigger === PopoverTriggers.click && !this.picked(path)) {
      this.hide(path);
    }
  }

  constructor(private popover: PopoverService,
              private hostRef: ElementRef) {
    popover.hided.subscribe(() => this.reference = null);
  }

  private picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  private show() {
    this.reference = this.popover.show(this.hostRef, this.options);
    this.displayed.emit(this.reference);
  }

  private hide(path: HTMLElement[] = []) {
    if (!!this.reference && !this.reference.picked(path)) {
      this.reference.hide();
      this.reference = null;
    }
  }
}
