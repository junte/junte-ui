import { Component, HostBinding, Input } from '@angular/core';
import { FormLayout } from '../../../enum/ui';

@Component({
  selector: 'jnt-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-item-host';

  @HostBinding('attr.layout')
  @Input()
  layout: FormLayout = null;

}
