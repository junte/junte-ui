import { Component, ContentChild, ElementRef, HostBinding, Input } from '@angular/core';
import { Breakpoint } from '../../../core/enums/breakpoint';
import { PropertyApi } from '../../../core/decorators/api';
import { BreadcrumbsComponent } from '../../../navigation/breadcrumbs/breadcrumbs.component';
import { BreakpointService } from '../../responsive/breakpoint.service';
import { DeviceService } from '../../responsive/device.service';
import { AppAsideComponent } from '../aside/app-aside.component';
import { AppFooterComponent } from '../footer/app-footer.component';

@Component({
  selector: 'jnt-app-content',
  templateUrl: './app-content.encapsulated.html'
})
export class AppContentComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-app-content-host';

  @HostBinding('attr.data-with-aside')
  get withAside() {
    if (this.breakpoint.current === Breakpoint.mobile) {
      return !!this.aside;
    } else
    if (!!this.aside) {
      return this.aside.collapsed ? 'collapsed' : 'full';
    }
    return null;
  }

  @HostBinding('attr.data-with-footer')
  get withFooter() {
    return !!this.footer;
  }

  @HostBinding('attr.data-with-breadcrumbs')
  get withBreadcrumbs() {
    return !!this.breadcrumbs;
  }

  @HostBinding('attr.data-windows')
  get windows() {
    return this.device.platform.windows;
  }

  @ContentChild(AppFooterComponent, {read: ElementRef, static: true})
  footer: AppFooterComponent;

  @ContentChild(BreadcrumbsComponent)
  breadcrumbs: BreadcrumbsComponent;

  @PropertyApi({
    description: 'Support padding for aside',
    type: 'AppAsideComponent'
  })
  @Input()
  aside: AppAsideComponent;

  constructor(private device: DeviceService,
              private breakpoint: BreakpointService) {
  }
}
