import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.encapsulated.html'
})
export class RadioComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-host';

  @HostBinding('attr.data-size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @Input()
  disabled = false;

  // TODO: incorrect works
  // @PropertyApi({
  //   description: '',
  //   type: 'boolean',
  //   default: 'false'
  // })
  @Input()
  checked = false;

  @PropertyApi({
    description: 'Size for radio button',
    type: 'string',
    path: 'ui.sizes',
    options: [Size.tiny,
      Size.small,
      Size.normal,
      Size.large],
    default: Size.normal
  })
  @Input()
  set size(size: Size) {
    this._size = size || Size.normal;
  }

  @PropertyApi({
    description: 'Label name for radio button',
    type: 'any'
  })
  @Input() label: any;

  @PropertyApi({
    description: 'Value for radio button',
    type: 'string'
  })
  @Input() value: string;
}
