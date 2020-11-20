import { Component, HostBinding, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breakpoint } from '../../../core/enums/breakpoint';
import { BreakpointService } from '../../responsive/breakpoint.service';
import { moveFromRight } from './animations';

@Component({
  selector: 'jnt-app-body',
  templateUrl: './app-body.encapsulated.html',
  animations: [
    moveFromRight
  ]
})
export class AppBodyComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-body-host';

  @Input() outlet: RouterOutlet;

  @HostBinding('@routeAnimations')
  get getRouteAnimations() {
    return this.breakpoint.current === Breakpoint.mobile ?
      this.outlet && this.outlet.activatedRouteData && this.outlet.activatedRouteData.animation : 'false';
  }

  constructor(private breakpoint: BreakpointService) {
  }

}
