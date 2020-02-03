import { Component, HostBinding, Input } from '@angular/core';
import { Color } from '../../../enums/color';

@Component({
  selector: 'jnt-dot',
  template: ''
})

export class DotComponent {

  @HostBinding('attr.host') readonly host = 'jnt-dot-host';

  @Input()
  @HostBinding('style.background-color')
  color: string = Color.orange;

}
