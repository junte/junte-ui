import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Color } from '../../core/enums/color';
import { Size } from '../../core/enums/size';
import { UI } from '../../core/enums/ui';
import { DotComponent } from '../dot/dot.component';

@Component({
  selector: 'jnt-label',
  templateUrl: './label.encapsulated.html'
})
export class LabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-label-host';

  ui = UI;

  @HostBinding('style.background-color')
  _color: string = Color.purple;

  @HostBinding('attr.data-size')
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
  @Input() set color(color: string) {
    this._color = color || Color.purple;
  }

  get color() {
    return this._color;
  }

  @PropertyApi({
    description: 'Label size',
    path: 'ui.size',
    default: Size.normal,
    options: [Size.small, Size.normal]
  })
  @Input() set size(size: Size) {
    this._size = size || Size.normal;
  }

  @ContentChild(DotComponent)
  dot: DotComponent;
}
