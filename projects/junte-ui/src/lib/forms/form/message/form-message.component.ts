import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { ValidationTypeError } from '../enums';

@Component({
  selector: 'jnt-form-message',
  templateUrl: './form-message.encapsulated.html'
})
export class FormMessageComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-message-host';

  active = false;

  @HostBinding('style.display')
  get style() {
    return !!this.active ? 'inline-block' : 'none';
  }

  @PropertyApi({
    description: 'Validation type error',
    path: 'ui.form.validators.typeError',
    options: [ValidationTypeError.required, ValidationTypeError.minlength]
  })
  @Input()
  type: ValidationTypeError = null;

}
