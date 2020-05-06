import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-confirm',
  templateUrl: './confirm.encapsulated.html'
})
export class ConfirmComponent {

  @HostBinding('attr.host') readonly host = 'jnt-confirm-host';

  ui = UI;

  @Input() message: string;

  @Input() messageTemplate: TemplateRef<any>;

  @Output() ok = new EventEmitter();

  @Output() cancel = new EventEmitter();

}
