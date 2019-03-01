import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormMessageComponent } from '../form-message/form-message.component';

@Component({
  selector: 'jnt-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {

  @ContentChildren(FormMessageComponent)
  messages: QueryList<FormMessageComponent>;

  @Input()
  name: string;
}
