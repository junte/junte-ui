import { Component, HostBinding, Input } from '@angular/core';
import { Color } from '../../core/enums/color';
import { PropertyApi } from '../../core/decorators/api';

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

  get color() {
    return this._color;
  }
}
