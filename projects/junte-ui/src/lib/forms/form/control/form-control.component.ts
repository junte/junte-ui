import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';
import { FormMessageComponent } from '../message/form-message.component';

@Component({
  selector: 'jnt-form-control',
  templateUrl: './form-control.encapsulated.html'
})
export class FormControlComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-control-host';

  ui = UI;

  @ContentChildren(FormMessageComponent)
  messages: QueryList<FormMessageComponent>;

  @PropertyApi({
    description: 'Form control name',
    type: 'string',
  })
  @Input()
  name: string;

}
