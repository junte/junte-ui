import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';

@Component({
  selector: 'jnt-form-label',
  templateUrl: './form-label.encapsulated.html'
})
export class FormLabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-label-host';

  @PropertyApi({
    description: 'The identifier of the item to associate with',
    type: 'string',
  })
  @HostBinding('attr.for')
  @Input()
  for: string;

}
