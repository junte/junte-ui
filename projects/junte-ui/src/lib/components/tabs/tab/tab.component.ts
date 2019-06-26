import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-tab',
  templateUrl: './tab.encapsulated.html'
})
export class TabComponent {

  @HostBinding('attr.host') readonly host = 'jnt-tab-host';
  @Input() title: string;
  @Input() active: boolean;
}
