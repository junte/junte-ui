import { Component, HostBinding, Input } from '@angular/core';
import { AppAsideComponent } from '../app-aside/app-aside.component';

@Component({
  selector: 'jnt-app-content',
  templateUrl: './encapsulated.html'
})
export class AppContentComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-content-host';

  @HostBinding('attr.with-aside') get withAside() {
    return !!this.aside;
  }

  @Input() aside: AppAsideComponent;

}
