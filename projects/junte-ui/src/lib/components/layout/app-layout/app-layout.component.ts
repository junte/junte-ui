import { Component, ContentChild, HostBinding } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppAsideComponent } from './app-aside/app-aside.component';

@Component({
  selector: 'jnt-app-layout',
  templateUrl: './app-layout.encapsulated.html'
})
export class AppLayoutComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-layout-host';

  @ContentChild(AppHeaderComponent, {static: false})
  header: AppHeaderComponent;

  @HostBinding('attr.with-header')
  get withHeader() {
    return !!this.header;
  }
}
