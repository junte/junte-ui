import { Component, ContentChild, ElementRef, HostBinding, Input } from '@angular/core';
import { AppAsideComponent } from '../app-aside/app-aside.component';
import { AppSubHeaderComponent } from '../app-sub-header/app-sub-header.component';
import { PropertyApi } from '../../../../decorators/api';

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

  @ContentChild(AppSubHeaderComponent, {static: false}) subHeader: AppSubHeaderComponent;
  @ContentChild('footer', {read: ElementRef, static: true}) footer;

  @PropertyApi({
    description: 'Support burger button for mobile devices',
    type: 'AppAsideComponent'
  })

  @Input() aside: AppAsideComponent;
}
