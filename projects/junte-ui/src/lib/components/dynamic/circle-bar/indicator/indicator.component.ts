import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-bar-indicator',
  templateUrl: './indicator.encapsulated.html'
})
export class BarIndicatorComponent {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-host';

  @PropertyApi({
    description: 'Indicator value',
    type: 'number',
  })
  @Input() value: number;

  @PropertyApi({
    description: 'Indicator title',
    type: 'string',
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Indicator color',
    type: 'string',
  })
  @Input() color: string;

  @PropertyApi({
    description: 'Indicator width',
    type: 'string',
  })
  @Input() width: string;

}
