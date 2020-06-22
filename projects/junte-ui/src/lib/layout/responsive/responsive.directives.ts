import { Directive, EmbeddedViewRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { PropertyApi } from '../../core/decorators/api';
import { Breakpoint } from '../../core/enums/breakpoint';
import { BreakpointService } from './breakpoint.service';

const breakpoints = [Breakpoint.mobile,
  Breakpoint.tablet,
  Breakpoint.desktop,
  Breakpoint.wide];

export abstract class BreakpointDirective implements OnInit, OnDestroy {

  private destroyed = false;
  private view: EmbeddedViewRef<any>;
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
      if (!this.view) {
        this.view = this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      if (!!this.view) {
        this.viewContainerRef.clear();
        this.view = null;
      }
    }
  }

}

@Directive({
  selector: '[jntFor]'
})
export class ForDirective extends BreakpointDirective {

  @PropertyApi({
    name: 'jntFor',
    description: 'Target break point for rendering',
    path: 'ui.breakpoints',
    options: breakpoints
  })
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

  @PropertyApi({
    name: 'jntMinFor',
    description: 'Min break point for rendering',
    path: 'ui.breakpoints',
    options: breakpoints
  })
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

  @PropertyApi({
    name: 'jntMaxFor',
    description: 'Max break point for rendering',
    path: 'ui.breakpoints',
    options: breakpoints
  })
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
