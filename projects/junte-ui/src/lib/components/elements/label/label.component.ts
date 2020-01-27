import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Colors, Sizes } from '../../../enums/ui';
import { getTextBrightness } from '../../../utils/brightness';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  @HostBinding('attr.size')
  _size: Sizes = Sizes.normal;

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
  @Input() color: string = Colors.purpleDark;

  @PropertyApi({
    description: 'Label size',
    path: 'ui.sizes',
    default: Sizes.normal,
    options: [Sizes.small, Sizes.normal]
  })

  @Input() set size(size: Sizes) {
    this._size = size || Sizes.normal;
  }

  @HostBinding('style.color')
  get textColor() {
    return getTextBrightness(this.color);
  }
}
