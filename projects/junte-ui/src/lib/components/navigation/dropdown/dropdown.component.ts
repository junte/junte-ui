import { Component, ContentChild, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-dropdown',
  templateUrl: './dropdown.encapsulated.html'
})
export class DropdownComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-dropdown-host';

  @HostBinding('attr.toggle') _visible: boolean;

  set visible(visible: boolean) {
    this._visible = visible;
  }

  get visible() {
    return this._visible;
  }

  @ContentChild('trigger', {static: false})
  triggerTemplate: TemplateRef<any>;

  @ContentChild('dropdown', {static: false})
  dropdownTemplate: TemplateRef<any>;

  toggle() {
    this.visible = !this.visible;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
