import { Component, HostBinding, Input } from '@angular/core';
import { Width } from '../../../enum/ui';

@Component({
  selector: 'jnt-container',
  templateUrl: './container.encapsulated.html'
})
export class ContainerComponent {

  @HostBinding('attr.host') readonly host = 'jnt-container-host';

  @HostBinding('attr.width')
  @Input() width: Width = Width.default;

}
