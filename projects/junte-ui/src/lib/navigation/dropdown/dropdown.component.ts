import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Position } from '../../core/enums/position';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-dropdown',
  templateUrl: './dropdown.encapsulated.html'
})
export class DropdownComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-dropdown-host';

  @HostBinding('attr.data-toggle') _visible: boolean;

  @HostBinding('attr.data-position')
  _position: Position = Position.right;

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

  @PropertyApi({
    description: 'Dropdown position',
    path: 'ui.position',
    default: 'right',
    options: [Position.right, Position.left]
  })
  @Input() set position(position: Position) {
    this._position = position || Position.left;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
