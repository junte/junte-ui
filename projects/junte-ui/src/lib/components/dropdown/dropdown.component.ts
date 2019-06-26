import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { UI } from '../../enum/ui';

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

  @ContentChild('trigger')
  triggerTemplate: TemplateRef<any>;

  @ContentChild('dropdown')
  dropdownTemplate: TemplateRef<any>;

  toggle() {
    this.visible = !this.visible;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
