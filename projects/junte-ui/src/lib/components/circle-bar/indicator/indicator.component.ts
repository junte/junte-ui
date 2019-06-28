import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'jnt-bar-indicator',
  templateUrl: './indicator.encapsulated.html'
})
export class BarIndicatorComponent {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-host';

  @Input() value: number;
  @Input() title: string;
  @Input() color: string;
  @Input() width: string;

}
