import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { AppLayoutPosition } from '../../../enums/ui';
import { AppHeaderComponent } from './app-header/app-header.component';

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

  @HostBinding('attr.position')
  @Input() position: AppLayoutPosition = AppLayoutPosition.default;
}
