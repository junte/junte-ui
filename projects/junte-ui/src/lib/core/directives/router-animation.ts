import { CommonModule } from '@angular/common';
import { Directive, ElementRef, HostBinding, Input, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { moveFromRight } from '../../layout/app/body/animations';
import { BreakpointService } from '../../layout/responsive/breakpoint.service';
import { Breakpoint } from '../enums/breakpoint';

@Directive({
  selector: '[jntRouterAnimation]'
})
export class RouterAnimationDirective {

  initialized = false;

  @Input() animation = moveFromRight;

  @Input('jntRouterAnimation')
  outlet: RouterOutlet;

  @HostBinding('@routeAnimations')
  get getRouteAnimations() {
    if (this.initialized) {
      return this.breakpoint.current === Breakpoint.mobile ?
        this.outlet && this.outlet.activatedRouteData && this.outlet.activatedRouteData.animation : 'false';
    }
  }

  constructor(private breakpoint: BreakpointService,
              private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.animation = this.animation;
    setTimeout(() => this.initialized = true, 0);
  }
}

@NgModule({
  declarations: [
    RouterAnimationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouterAnimationDirective
  ]
})
export class RouterAnimationModule {
}
