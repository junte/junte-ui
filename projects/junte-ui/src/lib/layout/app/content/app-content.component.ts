import { Component, ContentChild, ElementRef, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
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
    if (!!this.aside) {
      return this.aside.collapsed ? 'collapsed' : 'full';
    }
    return null;
  }

  @HostBinding('attr.data-with-footer')
  get withFooter() {
    return !!this.footer;
  }

  @ContentChild(AppFooterComponent, {read: ElementRef, static: true})
  footer: AppFooterComponent;

  @PropertyApi({
    description: 'Support padding for aside',
    type: 'AppAsideComponent'
  })
  @Input()
  aside: AppAsideComponent;
}
