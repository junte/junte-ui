import { Component, HostBinding } from '@angular/core';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-form-item',
  templateUrl: './form-item.encapsulated.html'
})
export class FormItemComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-item-host';

  ui = UI;

}
