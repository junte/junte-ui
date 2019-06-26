import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './app-aside.encapsulated.html'
})
export class AppAsideComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-aside-host';

  @HostBinding('attr.opened')
  @Input()
  opened = false;

  toggle() {
    this.opened = !this.opened;
  }
}
