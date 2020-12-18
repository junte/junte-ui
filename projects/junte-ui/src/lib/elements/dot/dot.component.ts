import { Component, HostBinding, Input } from '@angular/core';
import { Feature } from '../../core/enums/feature';
import { PropertyApi } from '../../core/decorators/api';
import { Color } from '../../core/enums/color';

@Component({
  selector: 'jnt-dot',
  template: ''
})

export class DotComponent {

  @HostBinding('attr.host') readonly host = 'jnt-dot-host';

  @HostBinding('style.background-color')
  _color: string = Color.purple;

  @PropertyApi({
    description: 'Dot color',
    type: 'string',
    default: 'orange',
  })
  @Input() set color(color: string) {
    this._color = color || Color.purple;
  }

  @PropertyApi({
    description: 'Animation pulse for dot',
    path: 'ui.feature',
    options: [Feature.pulse]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  get color() {
    return this._color;
  }
}
