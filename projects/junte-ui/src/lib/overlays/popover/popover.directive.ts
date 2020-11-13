import { Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { filter, takeWhile } from 'rxjs/operators';
import { Triggers } from '../../core/enums/triggers';
import { PopoverOptions } from './popover.component';
import { PopoverInstance, PopoverService } from './popover.service';

@Directive({
  selector: '[jntPopover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective implements OnInit, OnDestroy {

  private options: PopoverOptions;
  private _instance: PopoverInstance;
  private destroyed = false;
  private listeners: Function[] = [];

  set instance(instance: PopoverInstance) {
    this._instance = instance;
    if (!instance) {
      this.removed.emit();
    }
  }

  get instance() {
    return this._instance;
  }

  @Input('jntPopover')
  set __options__(options: Partial<PopoverOptions>) {
    this.options = new PopoverOptions(options);
  }

  @Output()
  attached = new EventEmitter<PopoverInstance>();

  @Output()
  removed = new EventEmitter();

  @HostListener('mouseenter')
  mouseEnter() {
    if (this.options.trigger === Triggers.hover) {
      this.show();
    }
  }

  @HostListener('click')
  click() {
    if (this.options.trigger === Triggers.click) {
      !this.instance ? this.show() : this.hide();
    }
  }

  constructor(private popover: PopoverService,
              private hostRef: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.popover.attached.pipe(takeWhile((() => !this.destroyed)),
      filter(t => t !== this.hostRef))
      .subscribe(() => this.instance = null);

    this.zone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('document', 'mousemove', ({path}) => {
        if (!!this.instance && this.options.trigger === Triggers.hover && !this.picked(path)) {
          this.hide(path);
        }
      }));
      this.listeners.push(this.renderer.listen('document', 'click', ({path}) => {
        if (!!this.instance && this.options.trigger === Triggers.click && !this.picked(path)) {
          this.hide(path);
        }
      }));
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    if (!!this.instance) {
      this.instance.hide();
      this.instance = null;
    }
    this.listeners.forEach(listener => listener());
  }

  private picked(elements: HTMLElement[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  private show() {
    if ((this.options.content || this.options.contentTemplate) && !this.options.disabled) {
      this.instance = this.popover.show(this.hostRef, this.options);
      this.attached.emit(this.instance);
    }
  }

  private hide(path: HTMLElement[] = []) {
    if (!!this.instance && !this.instance.picked(path)) {
      this.instance.hide();
      this.instance = null;
    }
  }
}
