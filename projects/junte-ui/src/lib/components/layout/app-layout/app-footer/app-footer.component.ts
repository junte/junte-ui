import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-app-footer',
  templateUrl: './app-footer.encapsulated.html'
})
export class AppFooterComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-footer-host';

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

}
