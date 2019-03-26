import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input() source: string;

  @HostBinding('attr.fluid')
  @Input() fluid = false;

}
