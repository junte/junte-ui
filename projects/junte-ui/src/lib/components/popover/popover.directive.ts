import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { PopoverComponent, PopoverOptions } from './popover.component';
import { PopoverTriggers } from '../../enum/ui';

const OPTIONS_KEY = 'options';

@Directive({
  selector: '[jnt-popover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective implements AfterViewInit, OnChanges, OnInit {

  private popover: PopoverComponent;
  private delayTimer: any;

  @Input('jnt-popover') options: PopoverOptions;

  constructor(public elementRef: ElementRef,
              public container: ViewContainerRef,
              public renderer: Renderer2,
              private cfr: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes[OPTIONS_KEY] && !!this.popover) {
      this.setOptions(changes[OPTIONS_KEY].currentValue);
    }
  }

  ngOnInit(): void {
    const factory = this.cfr.resolveComponentFactory(PopoverComponent);
    const componentRef = this.container.createComponent(factory);
    this.popover = componentRef.instance;

    if (!!this.popover) {
      this.setOptions(this.options);
    }
  }

  ngAfterViewInit(): void {
    let listeners: Function[] = [];

    this.popover.container = this.container;
    if (this.popover.trigger === PopoverTriggers.hover) {
      this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () =>
        this.delayed(() => this.show(), this.popover.enterDelay)
      );
      this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
        this.delayed(() => this.hide(), this.popover.leaveDelay);
        const element = this.popover.host.nativeElement;

        listeners.forEach(sub => sub());
        listeners = [];

        listeners.push(this.renderer.listen(element, 'mouseenter', () =>
          this.delayed(() => this.show(), this.popover.enterDelay)
        ));
        listeners.push(this.renderer.listen(element, 'mouseleave', () =>
          this.delayed(() => this.hide(), this.popover.leaveDelay)
        ));
      });
    } else if (this.popover.trigger === PopoverTriggers.focus) {
      this.renderer.listen(this.elementRef.nativeElement, 'focus', () => this.show());
      this.renderer.listen(this.elementRef.nativeElement, 'blur', () => this.hide());
    } else if (this.popover.trigger === PopoverTriggers.click) {
      this.renderer.listen(this.elementRef.nativeElement, 'click', e => {
        e.preventDefault();
        this.popover.visible ? this.hide() : this.show();
      });
    }
  }

  private setOptions(options: PopoverOptions): void {
    if (!!options.title) {
      this.popover.title = options.title;
    }
    if (!!options.content) {
      this.popover.content = options.content;
    }
    if (!!options.enterDelay) {
      this.popover.enterDelay = options.enterDelay;
    }
    if (!!options.leaveDelay) {
      this.popover.leaveDelay = options.leaveDelay;
    }
    if (!!options.trigger) {
      this.popover.trigger = options.trigger;
    }
    if (!!options.placement) {
      this.popover.placement = options.placement;
    }
  }

  private show(): void {
    this.popover.show();
  }

  private hide(): void {
    this.popover.hide();
  }

  private delayed(func: Function, delay: number = -1): void {
    if (!!this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    } else if (delay > 0) {
      this.delayTimer = setTimeout(() => {
        this.delayTimer = null;
        func();
      }, delay * 1000);
    }
  }
}
