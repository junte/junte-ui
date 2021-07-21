import { Component, HostBinding, Input } from '@angular/core';
import { Feature } from '../../core/enums/feature';
import { UI } from '../../core/enums/ui';
import { PropertyApi } from '../../core/decorators/api';
import { Color } from '../../core/enums/color';
import { Position } from '../../core/enums/position';

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.encapsulated.html'
})
export class BadgeComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-badge-host';

  @HostBinding('attr.data-position')
  _position: Position = Position.inline;

  _color: string = Color.primary;

  private _overflow = null;

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
    type: 'number'
  })
  @Input() set overflow(overflow: number) {
    this._overflow = overflow || null;
  }

  get overflow() {
    return this._overflow;
  }

  @HostBinding('attr.data-has-overflow')
  get hasOverflow() {
    return this.value > this.overflow;
  }

  @PropertyApi({
    description: 'Features for badge',
    path: 'ui.feature',
    options: [Feature.overflow],
    default: '[Feature.overflow]'
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [Feature.overflow];

  @PropertyApi({
    description: 'Badge background color',
    type: 'string',
    default: 'ui.color.primary'
  })
  @HostBinding('attr.data-color')
  @Input() set color(color: string) {
    this._color = color || Color.primary;
  }

  get color() {
    return this._color;
  }

  @PropertyApi({
    description: 'Badge position',
    path: 'ui.position',
    default: 'inline',
    options: [Position.inline,
      Position.rightTop,
      Position.leftTop]
  })
  @Input() set position(position: Position) {
    this._position = position || Position.inline;
  }
}
