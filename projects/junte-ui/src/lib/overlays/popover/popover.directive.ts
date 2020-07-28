import { Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, OnDestroy, Output, Renderer2 } from '@angular/core';
import { filter, takeWhile } from 'rxjs/operators';
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
  private destroyed = false;
  private listeners: Function[] = [];

  @Input('jntPopover')
  set __options__(options: PopoverOptions) {
    this.options = new PopoverOptions(options);
  }

  @Output('jntPopoverDisplayed')
  displayed = new EventEmitter<PopoverComponent>();

  @HostListener('mouseenter')
  mouseEnter() {
    if (this.options.trigger === PopoverTriggers.hover) {
      this.show();
    }
  }

  @HostListener('click')
  click() {
    if (this.options.trigger === PopoverTriggers.click) {
      !this.reference ? this.show() : this.hide();
    }
  }

  constructor(private popover: PopoverService,
              private hostRef: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
    popover.updated.pipe(takeWhile((() => !this.destroyed)), filter(t => !!t && t !== this.hostRef))
      .subscribe(() => this.reference = null);
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('document', 'mousemove', ({path}) => {
        if (!this.reference) {
          return;
        }
        if (this.options.trigger === PopoverTriggers.hover && !this.picked(path)) {
          this.hide(path);
        }
      }));
      this.listeners.push(this.renderer.listen('document', 'click', ({path}) => {
        if (!this.reference) {
          return;
        }
        if (this.options.trigger === PopoverTriggers.click && !this.picked(path)) {
          this.hide(path);
        }
      }));
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    if (!!this.reference) {
      this.reference.hide();
      this.reference = null;
    }
    this.listeners.forEach(listener => listener());
  }

  private picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  private show() {
    if (this.options.content || this.options.contentTemplate) {
      this.reference = this.popover.show(this.hostRef, this.options);
      this.displayed.emit(this.reference);
    }
  }

  private hide(path: HTMLElement[] = []) {
    if (!!this.reference && !this.reference.picked(path)) {
      this.reference.hide();
      this.reference = null;
    }
  }
}
