import { Component, HostBinding, Input } from '@angular/core';
import { Color } from '../../../enums/color';
import { PropertyApi } from '../../../decorators/api';

@Component({
  selector: 'jnt-dot',
  template: ''
})

export class DotComponent {

  @HostBinding('attr.host') readonly host = 'jnt-dot-host';

  @PropertyApi({
    description: 'Dot color',
    type: 'string',
    default: 'orange',
  })
  @Input()
  @HostBinding('style.background-color')
  color: string = Color.orange;

}
