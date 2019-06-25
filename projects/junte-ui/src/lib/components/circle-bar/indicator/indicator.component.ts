import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'jnt-bar-indicator',
  templateUrl: './encapsulated.html'
})
export class BarIndicatorComponent {

  @HostBinding('attr.host') readonly host = 'jnt-bar-indicator-host';

  @Input() value: number;
  @Input() color: string;
  @Input() size = 50;

}
