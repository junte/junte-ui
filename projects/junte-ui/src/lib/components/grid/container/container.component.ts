import { Component, HostBinding, Input } from '@angular/core';
import { Width } from '../../../enum/ui';
import { api } from '../../../decorators/api';

@Component({
  selector: 'jnt-container',
  templateUrl: './container.encapsulated.html'
})
export class ContainerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-container-host';

  @HostBinding('attr.width')
  _width = Width.default;

  @api({
    description: 'Vertical align of specific elements',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @Input() set width(width: Width) {
    if (!!width) {
      this._width = width;
    } else {
      this._width = Width.default;
    }
  }

}
