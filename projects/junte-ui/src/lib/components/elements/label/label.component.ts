import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Color } from '../../../enums/color';
import { Size } from '../../../enums/size';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  ui = UI;

  @HostBinding('attr.size')
  _size: Size = Size.normal;

  @PropertyApi({
    description: 'Label text',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Label icon',
    type: 'string',
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Label background color',
    type: 'string',
    default: 'purple'
  })
  @HostBinding('style.background-color')
  @Input() color: string = Color.purpleDark;

  @PropertyApi({
    description: 'Label size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.small, Size.normal]
  })

  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

}
