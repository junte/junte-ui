import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.component.encapsulated.html',
  encapsulation: ViewEncapsulation.None
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input() source: string;

}
