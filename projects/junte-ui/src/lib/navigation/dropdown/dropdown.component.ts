import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-dropdown',
  templateUrl: './dropdown.encapsulated.html'
})
export class DropdownComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-dropdown-host';

  @HostBinding('attr.data-toggle') _visible: boolean;

  @ContentChild('triggerTemplate')
  triggerTemplate: TemplateRef<any>;

  @ContentChild('dropdownTemplate')
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
