import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-dropdown',
  templateUrl: './dropdown.encapsulated.html'
})
export class DropdownComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-dropdown-host';
  @HostBinding('attr.toggle') _visible: boolean;

  @ContentChild('triggerTemplate', {static: false})
  triggerTemplate: TemplateRef<any>;

  @ContentChild('dropdownTemplate', {static: false})
  dropdownTemplate: TemplateRef<any>;

  set visible(visible: boolean) {
    this._visible = visible;
  }

  get visible() {
    return this._visible;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
