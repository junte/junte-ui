import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { Width } from '../../../../enums/width';

@Component({
  selector: 'jnt-container',
  templateUrl: './container.encapsulated.html'
})
export class ContainerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-container-host';

  @HostBinding('attr.width')
  _width = Width.default;

  @PropertyApi({
    description: 'Container width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @Input() set width(width: Width) {
    this._width = width || Width.default;
  }

}
