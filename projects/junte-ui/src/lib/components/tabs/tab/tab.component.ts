import { Component, Input } from '@angular/core';

@Component({
  selector: 'jnt-tab',
  templateUrl: 'tab.component.html'
})
export class TabComponent {
  @Input() title: string;
  @Input() active: boolean;
}
