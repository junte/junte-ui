import { Component, HostBinding, Input } from '@angular/core';
import { UI } from '../../../enum/ui';

const ASIDE_STATE = 'aside_collapsed';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './app-aside.encapsulated.html'
})
export class AppAsideComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-aside-host';

  private _collapsed = JSON.parse(localStorage.getItem(ASIDE_STATE));
  ui = UI;

  @Input()
  set collapsed(collapsed: boolean) {
    this._collapsed = collapsed;
    localStorage.setItem(ASIDE_STATE, JSON.stringify(collapsed));
  }

  get collapsed() {
    return this._collapsed;
  }

  @HostBinding('attr.opened')
  @Input() opened = false;

  toggle() {
    this.opened = !this.opened;
  }
}
