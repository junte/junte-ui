import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { ContentApi } from '../../core/decorators/api';
import { AppHeaderComponent } from './header/app-header.component';
import { AppLayoutPosition } from './enums';

@Component({
  selector: 'jnt-app-layout',
  templateUrl: './app-layout.encapsulated.html'
})
export class AppLayoutComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-layout-host';

  @ContentApi({
    selector: '<jnt-app-header',
    description: 'Header of application'
  })
  @ContentChild(AppHeaderComponent)
  header: AppHeaderComponent;

  @HostBinding('attr.with-header')
  get withHeader() {
    return !!this.header;
  }

  @HostBinding('attr.position')
  @Input() position: AppLayoutPosition = AppLayoutPosition.default;
}
