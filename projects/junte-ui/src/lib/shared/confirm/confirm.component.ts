import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-confirm',
  templateUrl: './confirm.encapsulated.html'
})
export class ConfirmComponent {

  @HostBinding('attr.host') readonly host = 'jnt-confirm-host';

  ui = UI;

  @PropertyApi({
    description: 'Message text',
    type: 'string'
  })
  @Input() message: string;

  @PropertyApi({
    description: 'Message template',
    type: 'string'
  })
  @Input() template: TemplateRef<any>;

  @Output() ok = new EventEmitter();

  @Output() cancel = new EventEmitter();

}
