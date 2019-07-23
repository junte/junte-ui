import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { AppAsideComponent } from '../app-aside/app-aside.component';
import { AppFooterComponent } from '../app-footer/app-footer.component';
import { AppSubHeaderComponent } from '../app-sub-header/app-sub-header.component';

@Component({
  selector: 'jnt-app-content',
  templateUrl: './app-content.encapsulated.html'
})
export class AppContentComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-content-host';

  @HostBinding('attr.with-aside') get withAside() {
    if (!!this.aside) {
      return this.aside.collapsed ? 'collapsed' : 'full';
    }
  }

  @HostBinding('attr.with-sub-header') get withSubHeader() {
    return !!this.subHeader;
  }

  @HostBinding('attr.with-footer') get withFooter() {
    return !!this.footer;
  }

  @ContentChild(AppSubHeaderComponent) subHeader: AppSubHeaderComponent;
  @ContentChild(AppFooterComponent) footer: AppFooterComponent;

  @Input() aside: AppAsideComponent;
}
