import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Color } from '../../../enums/color';
import { Position } from '../../../enums/position';
import { getTextBrightness } from '../../../utils/brightness';

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.encapsulated.html'
})
export class BadgeComponent {

  @HostBinding('attr.host') readonly host = 'jnt-badge-host';

  @HostBinding('attr.position')
  _position: Position = Position.rightTop;

  private _overflow = 99;

  @PropertyApi({
    description: 'Text to show in badge',
    type: 'string',
  })
  @Input() text: string;

  @PropertyApi({
    description: 'Number to show in badge',
    type: 'number',
  })
  @Input() value: number;

  @PropertyApi({
    description: 'Max count to show',
    type: 'number',
    default: '99'
  })
  @Input() set overflow(overflow: number) {
    this._overflow = overflow || 99;
  }

  get overflow() {
    return this._overflow;
  }

  @PropertyApi({
    description: 'Badge background color',
    type: 'string',
    default: 'purple'
  })
  @Input() color: string = Color.purple;

  @PropertyApi({
    description: 'Badge position',
    path: 'ui.position',
    default: 'rightTop',
    options: [Position.inline,
      Position.rightTop,
      Position.leftTop]
  })

  @Input() set position(position: Position) {
    this._position = position || Position.rightTop;
  }

  @HostBinding('style.color')
  get textColor() {
    return getTextBrightness(this.color);
  }
}
