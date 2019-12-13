import { Component, HostBinding, Input } from '@angular/core';
import { Sizes } from '../../../enum/ui';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-spinner',
  templateUrl: './spinner.encapsulated.html'
})
export class SpinnerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-spinner-host';

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

  @PropertyApi({
    description: 'Spinner size',
    path: 'ui.size',
    default: Sizes.normal,
    options: [Sizes.tiny, Sizes.small, Sizes.normal, Sizes.large]
  })

  @Input() set size(size: Sizes) {
    if (!!size) {
      this._size = size;
    } else {
      this._size = Sizes.normal;
    }
  }

}
