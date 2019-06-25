import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { PopoverTriggers } from '../../enum/ui';
import { PopoverOptions } from './popover.component';
import { PopoverService } from './popover.service';

@Directive({
  selector: '[jnt-popover]',
  exportAs: 'jntPopover'
})
export class PopoverDirective implements AfterViewInit {

  hovered$ = new BehaviorSubject<boolean>(false);

  private element: HTMLElement;
  private visible: boolean;

  @Input('jnt-popover') options: PopoverOptions;

  @HostListener('mouseenter')
  mouseEnter() {
    if (this.options.trigger === PopoverTriggers.hover) {
      console.log('directive hovered mouseenter');

      this.hovered$.next(true);
    }
  }

  @HostListener('mouseleave')
  mouseLeave() {
    if (this.options.trigger === PopoverTriggers.hover) {
      console.log('directive hovered mouseleave');
      this.hovered$.next(false);
    }
  }

  @HostListener('click')
  click() {
    if (this.options.trigger === PopoverTriggers.click) {
      this.visible ? this.hovered$.next(false) : this.hovered$.next(true);
    }
  }

  @HostListener('focus')
  focus() {
    if (this.options.trigger === PopoverTriggers.focus) {
      this.hovered$.next(true);
    }
  }

  @HostListener('blur')
  blur() {
    if (this.options.trigger === PopoverTriggers.focus) {
      this.hovered$.next(false);
    }
  }

  constructor(private popoverService: PopoverService,
              private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.element = this.elementRef.nativeElement;
    combineLatest(this.hovered$, this.popoverService.hovered$)
      .subscribe(([h1, h2]) => {
        if (!h1 && !h2) {
          this.hide();
        }
      });

    this.popoverService.visible$.subscribe(visible => this.visible = visible);
  }

  private show() {
    this.popoverService.show(this.element, this.options);
  }

  private hide() {
    this.popoverService.hide();
  }
}
