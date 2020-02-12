import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
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

  @Input()
  name: string;

}
