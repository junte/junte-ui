import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @HostBinding('attr.fluid')
  @Input() fluid = false;

}
