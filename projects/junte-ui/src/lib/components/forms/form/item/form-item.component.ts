import { Component, HostBinding } from '@angular/core';
import { UI } from '../../../../enums/ui';

@Component({
  selector: 'jnt-form-item',
  templateUrl: './form-item.encapsulated.html',
  styleUrls: ['./form-item.encapsulated.scss']
})
export class FormItemComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-item-host';

  ui = UI;

}
