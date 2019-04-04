import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-link',
  templateUrl: './encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input() source: string;

  @HostBinding('attr.fluid')
  @Input() fluid = false;

}
