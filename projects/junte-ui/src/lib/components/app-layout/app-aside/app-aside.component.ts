import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { UI } from '../../../enum/ui';
import { MenuComponent } from '../../menu';

const ASIDE_STATE = 'aside_collapsed';

@Component({
  selector: 'jnt-app-aside',
  templateUrl: './app-aside.encapsulated.html'
})
export class AppAsideComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-app-aside-host';

  private _collapsed: boolean;
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

  ngOnInit() {
    this.collapsed = JSON.parse(localStorage.getItem(ASIDE_STATE));
  }

  toggle() {
    this.opened = !this.opened;
  }
}
