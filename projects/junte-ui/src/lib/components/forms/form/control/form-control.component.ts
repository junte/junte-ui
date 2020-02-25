import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { UI } from '../../../../enums/ui';
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
