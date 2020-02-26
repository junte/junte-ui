import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Breakpoint } from '../../../enums/breakpoint';
import { BreakpointService } from './breakpoint.service';

export abstract class BreakpointDirective implements OnInit, OnDestroy {

  private destroyed = false;
  protected _target = [];

  protected constructor(private breakpoint: BreakpointService,
                        private templateRef: TemplateRef<any>,
                        private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.matched(this.breakpoint.current);
    this.breakpoint.changed
      .pipe(takeWhile(() => !this.destroyed))
      .subscribe(b => this.matched(b));
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  private matched(breakpoint: Breakpoint) {
    if (this._target.includes(breakpoint)) {
      if (this.viewContainerRef.length === 0) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainerRef.clear();
    }
  }

}

@Directive({
  selector: '[jntFor]'
})
export class ForDirective extends BreakpointDirective {

  @Input('jntFor')
  set target(target: Breakpoint) {
    this._target = [target];
  }

  constructor(breakpoint: BreakpointService,
              templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef) {
    super(breakpoint, templateRef, viewContainerRef);
  }

}

const min = {
  [Breakpoint.mobile]: [Breakpoint.mobile, Breakpoint.tablet, Breakpoint.desktop, Breakpoint.wide],
  [Breakpoint.tablet]: [Breakpoint.tablet, Breakpoint.desktop, Breakpoint.wide],
  [Breakpoint.desktop]: [Breakpoint.desktop, Breakpoint.wide],
  [Breakpoint.wide]: [Breakpoint.wide]
};

@Directive({
  selector: '[jntMinFor]'
})
export class ForMinDirective extends BreakpointDirective {

  @Input('jntMinFor')
  set target(target: Breakpoint) {
    this._target = min[target];
  }

  constructor(breakpoint: BreakpointService,
              templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef) {
    super(breakpoint, templateRef, viewContainerRef);
  }

}

const max = {
  [Breakpoint.mobile]: [Breakpoint.mobile],
  [Breakpoint.tablet]: [Breakpoint.mobile, Breakpoint.tablet],
  [Breakpoint.desktop]: [Breakpoint.mobile, Breakpoint.tablet, Breakpoint.desktop],
  [Breakpoint.wide]: [Breakpoint.mobile, Breakpoint.tablet, Breakpoint.desktop, Breakpoint.wide]
};

@Directive({
  selector: '[jntMaxFor]'
})
export class ForMaxDirective extends BreakpointDirective {

  @Input('jntMaxFor')
  set target(target: Breakpoint) {
    this._target = max[target];
  }

  constructor(breakpoint: BreakpointService,
              templateRef: TemplateRef<any>,
              viewContainerRef: ViewContainerRef) {
    super(breakpoint, templateRef, viewContainerRef);
  }

}
