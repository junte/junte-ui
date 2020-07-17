import { Component, ContentChild, HostBinding } from '@angular/core';
import { LpHeaderComponent } from '../header/lp-header.component';

@Component({
  selector: 'jnt-lp-layout',
  templateUrl: './lp-layout.encapsulated.html'
})
export class LpLayoutComponent {

  @HostBinding('attr.host') readonly host = 'jnt-lp-layout-host';

  @ContentChild(LpHeaderComponent) lpHeader: LpHeaderComponent;

  @HostBinding('attr.data-with-lp-header') get withLpHeader() {
    return !!this.lpHeader;
  }

}
