import { Component, HostBinding, Input } from '@angular/core';
import { Sizes } from '../../../enums/ui';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-spinner',
  template: ''
})
export class SpinnerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-spinner-host';

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

  @PropertyApi({
    description: 'Spinner size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

}
