import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'jnt-lp-footer',
  templateUrl: './lp-footer.encapsulated.html'
})
export class LpFooterComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-footer-host';

}
