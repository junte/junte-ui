import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { FormMessageComponent } from '../form-message/form-message.component';

@Component({
  selector: 'jnt-form-control',
  templateUrl: './form-control.encapsulated.html'
})
export class FormControlComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-control-host';

  @ContentChildren(FormMessageComponent)
  messages: QueryList<FormMessageComponent>;

  @Input()
  name: string;
}
