import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { UI } from '../../../enum/ui';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jnt-confirm',
  templateUrl: './confirm.encapsulated.html'
})
export class ConfirmComponent {

  ui = UI;
  form: FormGroup;
  @HostBinding('attr.host') readonly host = 'jnt-confirm-host';
  @Input() message: string | TemplateRef<any>;
  @Input() loading: boolean;
  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();

}
