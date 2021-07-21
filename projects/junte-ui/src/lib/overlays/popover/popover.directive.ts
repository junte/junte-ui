import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
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
    } else {
      this.attached.emit(instance);
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

  constructor(private popover: PopoverService,
              private hostRef: ElementRef,
              private renderer: Renderer2,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.popover.attached.pipe(
      takeWhile((() => !this.destroyed)),
      filter(target => !!this.instance && target !== this.hostRef)
    ).subscribe(() => this.instance = null);

    this.zone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('document', 'mousemove', (e: Event) => {
        const path = e.composedPath();
        if (!!this.instance && this.options.trigger === Triggers.hover && !this.picked(path)) {
          this.hide(path);
        }
      }));
      this.listeners.push(this.renderer.listen('document', 'click', (e: Event) => {
        const path = e.composedPath();
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

  private picked(elements: Object[]) {
    return elements.indexOf(this.hostRef.nativeElement) !== -1;
  }

  private show() {
    if ((this.options.content || this.options.contentTemplate) && !this.options.disabled) {
      this.instance = this.popover.show(this.hostRef, this.options);
    }
  }

  private hide(path: Object[] = []) {
    if (!!this.instance && !this.instance.picked(path)) {
      this.instance.hide();
      this.instance = null;
    }
  }
}
