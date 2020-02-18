import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { UI } from '../../../enums/ui';
import { Size } from '../../../enums/size';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.encapsulated.html'
})
export class RadioComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-host';

  @HostBinding('attr.size')
  _size = Size.normal;

  @PropertyApi({
    description: 'Set disabled state',
    type: 'boolean',
    default: 'false',
  })
  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  // TODO: incorrect works
  // @PropertyApi({
  //   description: '',
  //   type: 'boolean',
  //   default: 'false'
  // })
  @HostBinding('attr.checked')
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

  constructor(private element: ElementRef) {
  }

  getElement() {
    return this.element.nativeElement;
  }

}
